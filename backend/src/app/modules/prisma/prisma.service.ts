import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient, Prisma } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async softDelete(
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => any,
  ) {
    switch (params.action) {
      // prevent deleted data from being returned i find queries
      case 'findUnique': {
        // Change to findFirst since you cannot filter by anything except ID / unique with findUnique
        params.action = 'findFirst'
        // Add 'deleted' filter but maintain the ID filter
        params.args.where['deleted'] = null
        break
      }

      case 'findMany': {
        if (params.args?.where !== undefined) {
          // Exclude deleted records if they have not been explicitly requested
          if (params.args.where.deleted === undefined) {
            params.args.where['deleted'] = null
          }
        } else {
          // no where is set create a new where object
          params.args = { ...params.args, where: { deleted: null } }
        }
        break
      }

      // add deleted at timestamp (soft delete)
      case 'delete': {
        // Change action to an update
        params.action = 'update'
        params.args['data'] = { deleted: new Date() }
        break
      }

      case 'deleteMany': {
        // Delete many queries
        params.action = 'updateMany'
        if (params.args.data !== undefined) {
          params.args.data['deleted'] = new Date()
        } else {
          params.args['data'] = { deleted: new Date() }
        }
        break
      }
    }

    return next(params)
  }

  async onModuleInit() {
    await this.$use(this.softDelete)
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}

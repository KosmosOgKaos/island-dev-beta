import { ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Request } from 'express'

// we need to manually get the request in graphql
export const getRequest = <T = any>(context: ExecutionContext): T & Request => {
  const ctx = GqlExecutionContext.create(context)
  return ctx.getContext().req
}

import { Inject } from '@nestjs/common'
import { Args, Query, Resolver, Mutation, Int } from '@nestjs/graphql'
import { IsPublic } from '../auth/isPublic.decorator'
import { Logger, LOGGER_PROVIDER } from '../logging/logging.module'
import { ApplicationsService } from './applications.service'
import { CreateApplicationDTO } from './dto/createApplication.dto'
import { UpdateApplicationDTO } from './dto/updateApplication.dto'
import { Application } from './models/application.model'

@Resolver(() => Application)
export class ApplicationsResolver {
  constructor(
    private applicationsService: ApplicationsService,
    @Inject(LOGGER_PROVIDER)
    private logger: Logger,
  ) {}

  @IsPublic()
  @Query(() => Application, { nullable: true })
  async getApplicationByNationalId(
    @Args('owner', { type: () => String }) owner: string,
  ) {
    this.logger.info('Finding a single application with national id', { owner })
    // get the requested application
    const application =
      await this.applicationsService.getSingleApplicationByNationalId(owner)

    // return the found application
    return application
  }

  @IsPublic()
  @Query(() => Application, { nullable: true })
  async getApplicationById(@Args('id', { type: () => Int }) id: number) {
    this.logger.info('Finding a single application by id', { id })

    const application = await this.applicationsService.getApplicationById(id)

    return application
  }

  @IsPublic()
  @Query(() => [Application])
  async getApplications() {
    this.logger.info('Finding multiple applications')
    // list all applications
    const applications = await this.applicationsService.getAllApplications()

    return applications
  }

  @IsPublic()
  @Mutation(() => Application)
  async createApplication(
    @Args('data', { type: () => CreateApplicationDTO }) data: any,
  ) {
    this.logger.info(`Creating a new application from`)
    this.logger.info(JSON.stringify(data))

    const application = await this.applicationsService.createApplication(data)

    this.logger.info(`Created ${JSON.stringify(application)}`)

    return {
      id: application.id,
      data: application.data,
      owner: application.owner,
      completed: application.completed,
    }
  }

  @IsPublic()
  @Mutation(() => Application)
  async updateApplication(
    @Args('data', { type: () => UpdateApplicationDTO }) data: any,
    @Args('id', { type: () => Int }) id: number,
  ) {
    this.logger.info(`Updating application from ${JSON.stringify(data)}`)

    const application = await this.applicationsService.updateApplicationById(
      id,
      data,
    )

    return application
  }
}

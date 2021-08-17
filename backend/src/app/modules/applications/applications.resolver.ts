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

  @Query(() => Application, { nullable: true })
  async getApplicationByNationalId(
    @Args('owner', { type: () => String }) owner: string,
  ) {
    this.logger.info('Finding a single application with national id', { owner })
    // get the requested application
    const application =
      await this.applicationsService.getActiveApplicationByNationalId(owner)

    // return the found application
    return application
  }

  @Query(() => [Application])
  async getApplications() {
    this.logger.info('Finding multiple applications')
    // list all applications
    const applications = await this.applicationsService.getAllApplications()

    return applications
  }

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

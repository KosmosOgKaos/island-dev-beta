import { Inject } from '@nestjs/common'
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { Role } from '../auth/roles/role.enum'
import { Roles } from '../auth/roles/roles.decorator'
import { Logger, LOGGER_PROVIDER } from '../logging/logging.module'
import { EntriesService } from './entries.service'
import { Entry } from './models/entry.model'
import { SubEntry } from './models/sub-entry.model'

@Resolver(() => Entry)
export class EntriesResolver {
  constructor(
    @Inject('PUB_SUB')
    private pubSub: PubSub,
    private entriesService: EntriesService,
    @Inject(LOGGER_PROVIDER)
    private logger: Logger,
  ) {}

  @Query(() => Entry)
  async getEntry(@Args('id', { type: () => Int }) id: number) {
    this.logger.info('Finding a single entry with id', { id })
    // get the requested entry
    const entry = await this.entriesService.getSingleEntry(id)

    // broadcast the found entry to all sockets
    this.pubSub.publish('entryFound', {
      entryFound: entry,
    })

    // return the found entry with some dummy nested entry
    return { ...entry, entries: 1 }
  }

  @Roles(Role.Admin)
  @Query(() => [Entry])
  async getEntries() {
    this.logger.info('Finding multiple entries')
    // list all entries
    const entries = await this.entriesService.getAllEntries()

    /* We add some dummy nested entries here for simplicity
     * This would normally come from a database
     * This is to demo nested resolvers
     */
    return entries.map((entry) => ({ ...entry, entries: 2 }))
  }

  @Subscription((returns) => Entry, {
    name: 'entryFound',
  })
  foundEntriesHandler() {
    this.logger.info('Listening for found entries')

    // allow clients to see found entries
    return this.pubSub.asyncIterator('entryFound')
  }

  @ResolveField(() => [SubEntry])
  async entries(@Parent() entry: Entry) {
    this.logger.info('Resolving nested entry')
    return [
      {
        id: entry.entries,
        entry: 3,
      },
    ]
  }
}

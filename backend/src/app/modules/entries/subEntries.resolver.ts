import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { EntriesResolver } from './entries.resolver'
import { Entry } from './models/entry.model'
import { SubEntry } from './models/sub-entry.model'

@Resolver(() => SubEntry)
export class SubEntriesResolver {
  constructor(private entriesResolver: EntriesResolver) {}

  @ResolveField('entry', () => Entry)
  async entry(@Parent() subEntry: SubEntry) {
    return this.entriesResolver.getEntry(subEntry.entry as any)
  }
}

import { Module } from '@nestjs/common'
import { EntriesResolver } from './entries.resolver'
import { EntriesService } from './entries.service'
import { SubEntriesResolver } from './subEntries.resolver'

@Module({
  providers: [SubEntriesResolver, EntriesResolver, EntriesService],
})
export class EntriesModule {}

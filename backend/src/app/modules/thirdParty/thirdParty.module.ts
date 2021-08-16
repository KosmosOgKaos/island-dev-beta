import { Module } from '@nestjs/common'
import { ThirdPartyController } from './thirdParty.controller'
import { ThirdPartyService } from './thirdParty.service'

@Module({
  providers: [ThirdPartyService],
  controllers: [ThirdPartyController],
})
export class ThirdPartyModule {}

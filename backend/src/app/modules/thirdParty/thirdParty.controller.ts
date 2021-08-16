import { Controller, Get, Param } from '@nestjs/common'
import { IsPublic } from '../auth/isPublic.decorator'
import { ThirdPartyService } from './thirdParty.service'

@IsPublic()
@Controller('api/thirdParty')
export class ThirdPartyController {
  constructor(private user: ThirdPartyService) {}

  @Get(':id')
  getThirdPartyInfo(@Param('id') id: string) {
    return this.user.getUser(id)
  }
}

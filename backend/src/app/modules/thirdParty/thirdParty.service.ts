import { Injectable } from '@nestjs/common'
import * as users from './data/mockData.json'

@Injectable()
export class ThirdPartyService {
  getUser(id: String) {
    const userEntry = users.find((e: any) => e.kennitala === id)

    return {
      data: userEntry,
    }
  }
}

import { Global, Module } from '@nestjs/common'
import * as Redis from 'ioredis'
import environment from 'src/app/environment'
import { PubSubService } from './pubSub.service'

const options = {
  host: environment.redis.host,
  port: environment.redis.port,
}
@Global()
@Module({
  providers: [
    {
      provide: 'PUB_SUB',
      useFactory: () => {
        return new PubSubService({
          publisher: new Redis(options),
          subscriber: new Redis(options),
        })
      },
    },
  ],
  exports: ['PUB_SUB'],
})
export class PubSubModule {}

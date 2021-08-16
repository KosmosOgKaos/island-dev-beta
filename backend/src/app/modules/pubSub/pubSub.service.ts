import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import { PubSubRedisOptions } from 'graphql-redis-subscriptions/dist/redis-pubsub'

@Injectable()
export class PubSubService extends RedisPubSub implements OnModuleDestroy {
  constructor(options?: PubSubRedisOptions) {
    super(options)
  }

  async onModuleDestroy() {
    await this.close()
  }
}

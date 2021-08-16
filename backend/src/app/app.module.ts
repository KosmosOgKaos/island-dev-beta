import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core/constants'
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql'
import { join } from 'path'
import { AuthModule } from './modules/auth/auth.module'
import { AuthGuard } from './modules/auth/auth.guard'
import { EntriesModule } from './modules/entries/entries.module'
import { HealthModule } from './modules/health/health.module'
import { LoggingModule } from './modules/logging/logging.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { PubSubModule } from './modules/pubSub/pubSub.module'
import { RolesGuard } from './modules/auth/roles/roles.guard'
import environment from './environment'

@Module({
  imports: [
    PrismaModule,
    PubSubModule,
    GraphQLModule.forRoot({
      debug: !environment.production,
      playground: !environment.production,
      autoSchemaFile: true,
      sortSchema: true,
      path: '/api/graphql',
      installSubscriptionHandlers: true,
      definitions: !environment.production
        ? {
            path: join(process.cwd(), '../types/graphql-types.ts'),
          }
        : {},
    } as GqlModuleOptions),
    HealthModule,
    LoggingModule,
    AuthModule.register({
      secret: environment.jwtSecret,
      signOptions: { expiresIn: '4h' },
    }),
    EntriesModule,
  ],
  providers: [
    /*
    APP_GUARD needs to be defined here to control init order of APP_GUARD
    This also allows for dependency injection of these guards.
    This also makes auth enabled by default
    */
    {
      provide: APP_GUARD,
      useExisting: AuthGuard,
    },
    AuthGuard,
    {
      provide: APP_GUARD,
      useExisting: RolesGuard,
    },
    RolesGuard,
  ],
})
export class AppModule {}

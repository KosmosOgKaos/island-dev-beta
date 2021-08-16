import { Module } from '@nestjs/common'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt-auth.strategy'

@Module({
  providers: [AuthService, JwtStrategy, AuthResolver],
})
export class AuthModule {
  static register(config: JwtModuleOptions) {
    return {
      module: AuthModule,
      imports: [JwtModule.register(config)],
    }
  }
}

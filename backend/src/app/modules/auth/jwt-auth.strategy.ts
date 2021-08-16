import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { AuthUser } from './models/authUser.model'
import environment from 'src/app/environment'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.jwtSecret,
    })
  }

  validate(payload: any): AuthUser {
    // tell system how to deconstruct out custom JWT into the user property
    return {
      username: payload.username,
      roles: payload.roles,
    }
  }
}

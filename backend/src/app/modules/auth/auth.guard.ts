import { ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard as NestAuthGuard } from '@nestjs/passport'
import { getRequest } from './getRequest'
import { IS_PUBLIC_KEY } from './isPublic.decorator'

@Injectable()
export class AuthGuard extends NestAuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  // we need to manually get the request in graphql
  getRequest = getRequest

  canActivate(context: ExecutionContext) {
    // we check for metadata set by the Public decorator
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    // we chan access all public endpoints without auth
    if (isPublic) {
      return true
    }
    return super.canActivate(context) // pass auth check to JWT auth guard
  }
}

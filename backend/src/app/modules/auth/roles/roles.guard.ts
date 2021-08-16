import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Logger, LOGGER_PROVIDER } from '../../logging/logging.module'
import { Role } from './role.enum'
import { ROLES_KEY } from './roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @Inject(LOGGER_PROVIDER)
    private readonly logger: Logger,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    // there are no required roles this entrypoint is not protected with roles
    if (!requiredRoles) {
      return true
    }

    const ctx = GqlExecutionContext.create(context)
    const { user } = ctx.getContext().req
    const userHasRequiredRole = requiredRoles.some((role) =>
      user.roles.includes(role),
    )

    if (!userHasRequiredRole) {
      this.logger.warn(
        'Routes guard prevented routing, role not found in user',
        { user, requiredRoles },
      )
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED)
    } else {
      return userHasRequiredRole
    }
  }
}

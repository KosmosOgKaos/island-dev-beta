import { CanActivate, Injectable } from '@nestjs/common'
import type { ExecutionContext } from '@nestjs/common'
import { getRequest } from './getRequest'
import { AuthUser } from './models/authUser.model'
import { Role } from './roles/role.enum'

type AuthenticatedRequest = {
  auth: object
  user: object
}

@Injectable()
export class MockAuthGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean {
    const request = getRequest<AuthenticatedRequest>(context)
    const roles = (request.header('Authorization') ?? '').split(',') as Role[]

    // no roles means this request is not authenticated
    if (roles.length) {
      const mockUser: AuthUser = {
        username: 'test-user',
        roles,
      }
      request.auth = mockUser
      request.user = mockUser
    }
    return true
  }
}

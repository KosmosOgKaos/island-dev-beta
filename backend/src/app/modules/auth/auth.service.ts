import { Inject, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Logger, LOGGER_PROVIDER } from '../logging/logging.module'
import { Role } from './roles/role.enum'
import { AuthUser } from './models/authUser.model'
import environment from 'src/app/environment'

interface LoginInput {
  username: string
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(LOGGER_PROVIDER) private readonly logger: Logger,
  ) {}

  // This assigns roles to users
  assignUserRoles(username: string): Role[] {
    // USER
    // All authenticated clients have the user role by default
    const roles: Role[] = [Role.User]

    // ADMIN
    // we split here to make sure we don't compare partial nationalId
    const admins = environment.admins.split(',') ?? []
    // check if current user is included in admins list
    const isAdmin = Boolean(
      admins.find((adminUsername) => adminUsername === username),
    )
    // if this user is in admin list we append the admin role
    if (isAdmin) {
      roles.push(Role.Admin)
    }

    return roles
  }

  async login({ username }: LoginInput): Promise<AuthUser> {
    this.logger.info('Authenticating user', { username })

    // TODO: Add preferred authentication check here

    const payload = {
      username,
      roles: this.assignUserRoles(username),
    }

    return {
      ...payload,
      token: await this.jwtService.signAsync(payload),
    }
  }
}

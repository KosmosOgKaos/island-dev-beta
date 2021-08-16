import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { IsPublic } from './isPublic.decorator'
import { AuthUser } from './models/authUser.model'

@Resolver(() => AuthUser)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Mutation(() => AuthUser)
  async login(@Args('input') input: LoginDto) {
    return await this.authService.login(input)
  }
}

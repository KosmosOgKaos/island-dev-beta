import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Role } from '../roles/role.enum'

registerEnumType(Role, {
  name: 'Role',
})

@ObjectType()
export class AuthUser {
  @Field()
  username!: string

  @Field(() => [Role])
  roles!: Role[]

  @Field()
  token?: string
}

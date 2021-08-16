import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Application {
  @Field(() => Int)
  id!: number

  @Field()
  owner!: string

  @Field()
  data!: string
}

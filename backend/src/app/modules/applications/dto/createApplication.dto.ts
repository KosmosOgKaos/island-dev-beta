import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateApplicationDTO {
  @Field()
  owner!: string

  @Field()
  data!: string

  @Field(() => Boolean, { nullable: true })
  completed?: boolean
}

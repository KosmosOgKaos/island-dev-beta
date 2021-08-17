import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateApplicationDTO {
  @Field(() => String, { nullable: true })
  data?: string = '{}'

  @Field(() => Boolean, { nullable: true })
  completed?: boolean
}

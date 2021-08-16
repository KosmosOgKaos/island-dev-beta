import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ApplicationDTO {
  @Field()
  owner!: string

  @Field()
  data!: string
}

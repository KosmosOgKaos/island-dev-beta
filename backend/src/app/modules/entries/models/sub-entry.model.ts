import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entry } from './entry.model'

@ObjectType()
export class SubEntry {
  @Field(() => Int)
  id!: number

  @Field(() => Entry)
  entry!: Entry
}

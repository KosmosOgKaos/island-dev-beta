import { Field, Int, ObjectType } from '@nestjs/graphql'
import { SubEntry } from './sub-entry.model'

@ObjectType()
export class Entry {
  @Field(() => Int)
  id!: number

  @Field()
  type!: string

  @Field()
  title!: string

  @Field(() => [SubEntry])
  entries!: SubEntry[]
}

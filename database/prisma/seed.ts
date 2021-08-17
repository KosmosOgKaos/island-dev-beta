import { PrismaClient } from '@prisma/client'
import * as faker from 'faker'
const prisma = new PrismaClient()

export async function seed() {
  const types = ['type1', 'type2']
  const createdEntries = await prisma.entry.createMany({
    data: [
      {
        title: faker.name.firstName(),
        type: faker.random.arrayElement(types),
      },
      {
        title: faker.name.firstName(),
        type: faker.random.arrayElement(types),
      },
      {
        title: faker.name.firstName(),
        type: faker.random.arrayElement(types),
      },
    ],
  })
  console.log('Created entries', createdEntries.count)

  await prisma.$disconnect()
}

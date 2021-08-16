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

  const createdApplications = await prisma.application.createMany({
    data: [
      {
        id: 1,
        data: JSON.stringify({
          educated: "yes"
        }),
        owner: "0101302129"
      },
      {
        id: 2,
        data: JSON.stringify({
          educated: "no"
        }),
        owner: "0101302209"
      },
      {
        id: 3,
        data: JSON.stringify({
          educated: "maybe",
        }),
        owner: "0101302399"
      }
    ]
  })

  await prisma.$disconnect()
}

import { Prisma, PrismaClient } from '@prisma/client'
import { getGqlClient, setup } from '@test/setup'
import { Role } from '../../auth/roles/role.enum'
const prisma = new PrismaClient()

const testData: Prisma.EntryCreateManyInput[] = [
  {
    id: 1337,
    title: 'Random test entry',
    type: 'Random type',
  },
]

describe('getEvents', () => {
  beforeAll(async () => {
    // seed database with test data
    await prisma.entry.createMany({
      data: testData,
    })
    await prisma.$disconnect()

    // create the nestjs test app
    await setup()
  })

  it(`Should return a specific entry`, async () => {
    // our request will be authenticated and has the user role (skip roles to have request unauthenticated)
    const gqlClient = getGqlClient({ roles: [Role.User] })
    const query = `{
      getEntry(id: 1337) {
        id
        title
        type
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.getEntry).toMatchObject(testData[0])
      })
  })
})

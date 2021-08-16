import { Prisma, PrismaClient } from '@prisma/client'
import { getGqlClient, setup } from '@test/setup'
import { Role } from '../../auth/roles/role.enum'
const prisma = new PrismaClient()

const testData: Prisma.EntryCreateManyInput[] = [
  {
    title: 'First test entry',
    type: 'Random type',
  },
  {
    title: 'Second test entry',
    type: 'Another random type',
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

  it(`Should return list of at least two entries`, async () => {
    // our request will be authenticated and has the user and admin roles (skip roles to have request unauthenticated)
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `{
      getEntries {
        type
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.getEntries.length).toBeGreaterThanOrEqual(2)
      })
  })
})

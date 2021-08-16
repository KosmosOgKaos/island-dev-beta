import { Prisma, PrismaClient } from '@prisma/client'
import { getGqlClient, setup } from '@test/setup'
import { Role } from '../../auth/roles/role.enum'
const prisma = new PrismaClient()

const testData: Prisma.ApplicationCreateManyInput[] = [
  {
    id: 1,
    owner: '1919302599',
    data: '"education": "uneducated"',
  },
  {
    id: 2,
    owner: '2020292029',
    data: '"education": "uneducated"',
    completed: true,
  },
  {
    id: 3,
    owner: '2020292029',
    data: '"education": "uneducated"',
  },
]

describe('getApplications', () => {
  beforeAll(async () => {
    // seed database with test data
    await prisma.application.createMany({
      data: testData,
    })
    await prisma.$disconnect()

    // create the nestjs test app
    await setup()
  })

  it(`Should return a complete application`, async () => {
    const gqlClient = getGqlClient()
    const query = `{
      getApplicationByNationalId(owner: "1919302599") {
        id
        owner
        data
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.getApplicationByNationalId).toMatchObject(
          testData[0],
        )
      })
  })

  it(`Should return the first incompleted application`, async () => {
    // our request will be authenticated and has the user role (skip roles to have request unauthenticated)
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `{
      getApplicationByNationalId(owner: "2020292029") {
        id
        owner
        data
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.getApplicationByNationalId).toMatchObject(
          testData[2],
        )
      })
  })
})

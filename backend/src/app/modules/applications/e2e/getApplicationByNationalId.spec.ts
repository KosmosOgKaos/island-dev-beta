import { Prisma, PrismaClient } from '@prisma/client'
import { getGqlClient, setup } from '@test/setup'
import { Role } from '../../auth/roles/role.enum'
import { testData } from './testData'
const prisma = new PrismaClient()

describe('getApplicationByNationalId', () => {
  const testIds: number[] = []
  beforeAll(async () => {
    // seed database with test data
    for (const data of testData) {
      const application = await prisma.application.create({ data })
      testIds.push(application.id)
    }
    await prisma.$disconnect()

    // create the nestjs test app
    await setup()
  })

  afterAll(async () => {
    for (const id of testIds) {
      await prisma.application.delete({ where: { id } })
    }
    await prisma.$disconnect()
  })

  it(`Should return a complete application`, async () => {
    const gqlClient = getGqlClient()
    const query = `{
      getApplicationByNationalId(owner: "${testData[0].owner}") {
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
      getApplicationByNationalId(owner: "${testData[2].owner}") {
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

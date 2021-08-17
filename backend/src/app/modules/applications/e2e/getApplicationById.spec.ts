import { Prisma, PrismaClient } from '@prisma/client'
import { getGqlClient, setup } from '@test/setup'
import { Role } from '../../auth/roles/role.enum'
import { testData } from './testData'
const prisma = new PrismaClient()

describe('getApplicationById', () => {
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
      getApplicationById(id: ${testIds[0]}) {
        id
        owner
        data
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.getApplicationById).toMatchObject(testData[0])
      })
  })

  it(`Should return a completed application`, async () => {
    // our request will be authenticated and has the user role (skip roles to have request unauthenticated)
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `{
      getApplicationById(id: ${testIds[1]}) {
        id
        owner
        data
        completed
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.getApplicationById).toMatchObject(testData[1])
        expect(result.body.data.getApplicationById.completed).toBe(true)
      })
  })
})

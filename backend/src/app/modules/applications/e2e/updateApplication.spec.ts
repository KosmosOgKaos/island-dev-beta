import { Prisma, PrismaClient } from '@prisma/client'
import { getGqlClient, setup } from '@test/setup'
import { Role } from '../../auth/roles/role.enum'
import { testData } from './testData'
const prisma = new PrismaClient()

describe('updateApplication', () => {
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

  it(`Updating an existing application will append provided data`, async () => {
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `mutation {
      updateApplication(id: ${testIds[0]}, data: {
        data: \"{\\\"hungry\\\":\\\"very\\\"}\"
      }) {
        data
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(
          JSON.parse(result.body.data.updateApplication.data),
        ).toMatchObject({
          education: 'very educated',
          hungry: 'very',
        })
      })
  })

  it(`Updates are persistent`, async () => {
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `{
      getApplicationById(id: ${testIds[0]}) {
        data
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(
          JSON.parse(result.body.data.getApplicationById.data),
        ).toMatchObject({
          education: 'very educated',
          hungry: 'very',
        })
      })
  })

  it(`Retargeting existing keys will update/overwrite them`, async () => {
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `mutation {
      updateApplication(id: ${testIds[0]}, data: {
        data: \"{\\\"education\\\":\\\"somewhat\\\"}\"
      }) {
        data
      }
    }`

    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(
          JSON.parse(result.body.data.updateApplication.data),
        ).toMatchObject({
          education: 'somewhat',
          hungry: 'very',
        })
      })
  })

  it(`Should be able to update completed`, async () => {
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `mutation {
      updateApplication(id: ${testIds[0]}, data: {
        completed: true
      }) {
        data
        completed
      }
    }`

    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(
          JSON.parse(result.body.data.updateApplication.data),
        ).toMatchObject({
          education: 'somewhat',
          hungry: 'very',
        })
        expect(result.body.data.updateApplication.completed).toBe(true)
      })
  })

  it(`Completed attribute updates persist`, async () => {
    const gqlClient = getGqlClient({ roles: [Role.User, Role.Admin] })
    const query = `{
      getApplicationById(id: ${testIds[0]}) {
        data
        completed
      }
    }`
    return gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(
          JSON.parse(result.body.data.getApplicationById.data),
        ).toMatchObject({
          education: 'somewhat',
          hungry: 'very',
        })
        expect(result.body.data.getApplicationById.completed).toBe(true)
      })
  })
})

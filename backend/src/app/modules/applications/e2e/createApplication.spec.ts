import { PrismaClient } from '@prisma/client'
import { getGqlClient, setup } from '@test/setup'
const prisma = new PrismaClient()

describe('createApplication', () => {
  const testIds: number[] = []
  beforeAll(async () => {
    // seed database with test data
    // create the nestjs test app
    await setup()
  })

  afterAll(async () => {
    for (const id of testIds) {
      await prisma.application.delete({ where: { id } })
    }
    await prisma.$disconnect()
  })

  it(`Should create an uncompleted application when completeness isn't specified`, async () => {
    const gqlClient = getGqlClient()
    const query = `mutation {
      createApplication(
        data: {
          data: \"{\\\"hungry\\\":\\\"very\\\"}\"
          owner: "0101302559"
        }) {
        id
        owner
        data
        completed
      }
    }`
    return await gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.createApplication).toMatchObject({
          id: result.body.data.createApplication.id,
          data: JSON.stringify({ hungry: 'very' }),
          owner: '0101302559',
          completed: false,
        })
        testIds.push(result.body.data.createApplication.id)
      })
  })

  it(`Should create a completed application when completeness is specified as true`, async () => {
    const gqlClient = getGqlClient()
    const query = `mutation {
      createApplication(
        data: {
          data: \"{\\\"hungry\\\":\\\"somewhat\\\"}\"
          owner: "0101302559"
          completed: true
        }) {
        id
        owner
        data
        completed
      }
    }`
    return await gqlClient(query)
      .expect(200)
      .expect((result) => {
        expect(result.body.data.createApplication).toMatchObject({
          id: result.body.data.createApplication.id,
          data: JSON.stringify({ hungry: 'somewhat' }),
          owner: '0101302559',
          completed: true,
        })
        testIds.push(result.body.data.createApplication.id)
      })
  })

  it(`Should throw an error if data is missing from input data`, async () => {
    const gqlClient = getGqlClient()
    const query = `mutation {
      createApplication(
        data: {
          owner: "0101302559"
        }) {
        owner
        data
        completed
      }
    }`
    return await gqlClient(query).expect(400)
  })

  it(`Should throw an error if owner is missing from input data`, async () => {
    const gqlClient = getGqlClient()
    const query = `mutation {
      createApplication(
        data: {
          data: \"{\\\"hungry\\\":\\\"very\\\"}\"
        }) {
        owner
        data
        completed
      }
    }`
    return await gqlClient(query).expect(400)
  })
})

import { Test, TestingModuleBuilder } from '@nestjs/testing'
import { INestApplication, ValidationPipe } from '@nestjs/common'
import supertest, * as request from 'supertest'
import { AppModule } from '../src/app/app.module'
import { AuthGuard } from 'src/app/modules/auth/auth.guard'
import { MockAuthGuard } from 'src/app/modules/auth/mockAuth.guard'
import { Role } from 'src/app/modules/auth/roles/role.enum'

export type GqlClient = (query: string, variables?: object) => supertest.Test
interface GetGqlClientInput {
  roles?: Role[]
}
interface SetupInput {
  modify: (app: TestingModuleBuilder) => TestingModuleBuilder
}

// needed for generic error validation
expect.extend({
  anyOf(value: any, classTypes: any[]) {
    const types = classTypes.map((type) => type.name).join(', ')
    const message = `expected to be any of type: ${types}`
    for (let i = 0; i < classTypes.length; i++) {
      if (value.constructor === classTypes[i]) {
        return {
          pass: true,
          message: () => message,
        }
      }
    }

    return {
      pass: false,
      message: () => message,
    }
  },
})

let app: INestApplication
export const setup = async (options?: SetupInput) => {
  const builder = await Test.createTestingModule({
    imports: [AppModule],
  })

  const testModule = builder
    .overrideProvider(AuthGuard)
    .useValue(new MockAuthGuard())

  // allow tests to pass in builder to modify base app
  const modify = options?.modify ?? ((app) => app)
  const modifiedTestModule = await modify(testModule).compile()

  app = modifiedTestModule.createNestApplication()
  app.useGlobalPipes(new ValidationPipe())

  return await app.init()
}

export const getGqlClient =
  ({ roles = [] }: GetGqlClientInput = {}): GqlClient =>
  (query, variables = {}) =>
    request(app.getHttpServer())
      .post('/api/graphql')
      .send({ query, variables })
      .set({ Authorization: roles.join(',') })

afterAll(async () => {
  if (app) {
    // we close here to run on module destroy on all modules
    await app.close()
  }
})

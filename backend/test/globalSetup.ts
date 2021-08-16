import { execSync } from 'child_process'

// set the required environment variables
process.env.DATABASE_URL =
  'postgresql://test_db:test_db@localhost:5432/test_db?schema=public'
process.env.REDIS_HOST = 'localhost'
process.env.REDIS_PORT = '7000'

const setup = async () => {
  // we have to pass the required environment variables since this runs outside of jest
  execSync(
    `cd .. && DATABASE_URL=${process.env.DATABASE_URL} yarn database reset --force --skip-seed`,
  )
}

export default setup

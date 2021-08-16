interface Environment {
  production: boolean
  jwtSecret: string
  admins: string
  redis: {
    host: string
    port: number
  }
  logLevel: string
}

const checkVariables = (variables: Environment) => {
  for (const [key, variable] of Object.entries(variables)) {
    if (typeof variable !== 'boolean' && !variable) {
      throw new Error(`Missing environment variable: ${key}`)
    }
  }
  return variables
}

const config = {
  production: process.env.NODE_ENV === 'production',
  jwtSecret: process.env.JWT_SECRET ?? '',
  admins: process.env.ADMINS ?? '',
  redis: {
    host: process.env.REDIS_HOST ?? '',
    port: Number(process.env.REDIS_PORT),
  },
  logLevel: process.env.LOG_LEVEL ?? 'info',
}

export default checkVariables(config)

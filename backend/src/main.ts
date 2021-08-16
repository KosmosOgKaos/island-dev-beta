import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const port = process.env.PORT || 4000
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(port)
  console.log(`Api started on port ${port}`)
}
bootstrap()

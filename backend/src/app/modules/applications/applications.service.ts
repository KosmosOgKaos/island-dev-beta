import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ApplicationsService {
  constructor(private prismaService: PrismaService) {}

  getAllApplications() {
    return this.prismaService.application.findMany()
  }

  getApplicationById(id: number) {
    return this.prismaService.application.findUnique({
      where: {
        id: id,
      },
    })
  }

  getSingleApplicationByNationalId(owner: string) {
    return this.prismaService.application.findFirst({
      where: { owner, completed: false },
    })
  }

  async updateApplicationById(id: number, data: any) {
    const applicationBefore = await this.getApplicationById(id)

    console.log(JSON.stringify(applicationBefore))

    const oldData = JSON.parse(applicationBefore?.data ?? '{}')
    const incomingData = JSON.parse(data.data)
    const processedData = {
      ...oldData,
      ...incomingData,
    }

    console.log(processedData)

    return this.prismaService.application.update({
      where: { id },
      data: {
        data: JSON.stringify(processedData),
      },
    })
  }

  createApplication(data: any, owner: string) {
    return this.prismaService.application.create({
      data: {
        data,
        owner,
      },
    })
  }
}

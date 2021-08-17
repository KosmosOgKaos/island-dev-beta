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

  async getActiveApplicationByNationalId(owner: string) {
    const first = await this.prismaService.application.findFirst({
      where: { owner, completed: false },
    })

    if (!first) {
      await this.createApplication({
        owner,
        completed: false,
        data: '{}',
      })
    }

    return this.prismaService.application.findFirst({
      where: { owner, completed: false },
    })
  }

  async updateApplicationById(id: number, data: any) {
    const applicationBefore = await this.getApplicationById(id)

    let oldData
    try {
      oldData = JSON.parse(applicationBefore?.data ?? '{}')
    } catch {
      oldData = {}
    }
    const incomingData = JSON.parse(data.data)
    const processedData = {
      ...oldData,
      ...incomingData,
    }

    return this.prismaService.application.update({
      where: { id },
      data: {
        data: JSON.stringify(processedData),
        completed: data.completed
          ? data.completed
          : applicationBefore?.completed,
      },
    })
  }

  createApplication(inputData: {
    data: string
    owner: string
    completed: boolean
  }) {
    return this.prismaService.application.create({
      data: {
        data: inputData.data,
        owner: inputData.owner,
        completed: inputData?.completed,
      },
    })
  }
}

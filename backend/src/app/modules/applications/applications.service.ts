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
        data: `{
          "ssn": "1706941119",
          "name": "Guðrún Jónsdóttir",
          "address": "Lindargata 3",
          "city": "Reykjavík",
          "postNumber": "101",
          "email": "gj@island.is",
          "phoneNumber": "4265500",
          "adstaedur_umsækjanda": "Launþegi",
          "skraningardagur_umsoknar": "2021-08-15",
          "hlutfall_personuafslattar": 100,
          "personuafslattur_2021": 50792,
          "tekjur_a_manudi": 589459,
          "greidslur_tryggingastofnun": 25000,
          "greidslur_almennir lifeyrissjodir": 0,
          "tekjuskattur_threp_1": 0.3145,
          "tekjuskattur_threp_2": 0.3795,
          "vidbotarlifeyrissparnadur": 4,
          "stettarfelag_hlutfall": 1,
          "employment_percentage": 100,
          "lifeyrissjodur_hlutfall": 4,
          "faedingarorlof": false,
          "capital_income": 0,
          "pension_payment": 0,
          "grunnatvinnuleysisbaetur": 307430,
          "fjoldi_barna": 1,
          "children": [{
            "name": "Katla Marsibil Stefánsdóttir",
            "ssn": "1234567890"
          }]
        }`,
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

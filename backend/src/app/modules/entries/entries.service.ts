import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class EntriesService {
  constructor(private prismaService: PrismaService) {}

  getAllEntries() {
    return this.prismaService.entry.findMany()
  }

  getSingleEntry(id: number) {
    return this.prismaService.entry.findUnique({ where: { id } })
  }
}

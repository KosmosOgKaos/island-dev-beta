import { Prisma } from '@prisma/client'

export const testData: Prisma.ApplicationCreateManyInput[] = [
  {
    owner: '0101302129', // gervimaður noregur
    data: '{"education":"very educated"}',
  },
  {
    owner: '0101302209', // gervimaður finnland
    data: '{"education":"uneducated"}',
    completed: true,
  },
  {
    owner: '0101302209', // gervimaður finnland
    data: '{"education":"maybe educated"}',
  },
  {
    owner: '0101302399', // gervimaður færeyjar
    data: '{"education":"educated"}',
  },
]

import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";

export class ClubRepository {
  async findAll(
    where?: Prisma.clubesWhereInput,
    orderBy?: Prisma.clubesOrderByWithRelationInput
  ) {
    return prisma.clubes.findMany({
      where,
      orderBy: orderBy ?? {
        id: "desc",
      },
    });
  }

  async findById(id: number) {
    return prisma.clubes.findUnique({
      where: {
        id,
      },
    });
  }
}

export const clubRepository = new ClubRepository();

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

  async findByName(nome: string) {
    return prisma.clubes.findMany({
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
    });
  }
}

export const clubRepository = new ClubRepository();

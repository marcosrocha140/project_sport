import { prisma } from "@/app/lib/prisma";

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.usuarios.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(id: number) {
    return prisma.usuarios.findUnique({
      where: {
        id,
      },
      
    });
  }

  async create(data:{
    nome: string;
    email: string;
    senha: string;
    tipo?: string;
    imagem: string;
  }){
    return await prisma.usuarios.create({
        data:{
            nome: data.nome,
            email: data.email,
            senha: data.senha,
            tipo: data.tipo,
            imagem: data.imagem,
        },
    });
  }
}

export const userRepository = new UserRepository();

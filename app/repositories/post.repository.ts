import {prisma} from '@/app/lib/prisma'
import { FaDeleteLeft } from 'react-icons/fa6';


export class PostRepository {
  async findAll() {
    return prisma.posts.findMany({
      orderBy: {
        titulo: "asc",
      },
    });
  }

  async findById(id: number) {
    return prisma.posts.findUnique({
      where: {
        id,
      },
    });
  }
  
  async create(data:{
    titulo: string,
    conteudo: string,
    imagem?: string
  }) {
    return prisma.posts.create({
      data:{
        titulo: data.titulo,
        conteudo: data.conteudo,
        imagem: data.imagem
      }
    })
  }

  async update(id: number, data: {titulo?: string, conteudo?: string, imagem?: string}){
    return prisma.posts.update({where: {id}, data});
  }

  async delete(id: number) {
    return prisma.posts.delete({
      where: {
        id,
      },
    })
  }
  

}

export const postRepository = new PostRepository();
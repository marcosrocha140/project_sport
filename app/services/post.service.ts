import { postRepository } from "../repositories/post.repository";
import { CreatePostInput } from "../schemas/post.schema";

export class PostService{
    async create(data: CreatePostInput){
        return postRepository.create(data);
    }

    async findAll(){
        return postRepository.findAll();
    }

    async findById(id: number){
        if(isNaN(id)){
            throw new Error("ID inválido");
        }
        return postRepository.findById(id);
    }

    async update(id: number, data:{
        titulo?: string,
        conteudo?: string,
        imagem?: string
    }){
        const post = await postRepository.findById(id);

        if(!post){
            throw new Error("Post não encontrado");
        }

        return postRepository.update(id, data);
    }

    async delete(id: number){
        const post = await postRepository.findById(id);

        if(!post){
            throw new Error("Post não encontrado!");
        }

        return postRepository.delete(id);
    }
}

export const postService = new PostService();
import { NextResponse } from "next/server";
import { postRepository} from "@/app/repositories/post.repository";
import { createPostSchema } from "@/app/schemas/post.schema";
import { postService } from "@/app/services/post.service";

export async function GET(){
    const posts = await postService.findAll();

    return NextResponse.json(posts);
}

export async function POST(request: Request){
    const body = await request.json();

    const result = createPostSchema.safeParse(body);

    if(!result.success){
        return NextResponse.json(
            {
                error: "Dados Invalidos!",
                details: result.error.flatten(),
            },
            {status: 400}
        );
    }

    const post = await postRepository.create(result.data);
    // const post = await postRepository.create({
    //     titulo: body.titulo,
    //     conteudo: body.conteudo,
    //     imagem: body.imagem,
    // });
    
    return NextResponse.json("Dados Enviados!", {status: 201});
}
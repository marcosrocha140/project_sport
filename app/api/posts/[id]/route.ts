import { NextResponse } from "next/server";
import { postService } from "@/app/services/post.service";
import { updatePostSchema } from "@/app/schemas/post.schema";

interface Params{
    params: Promise<{id: string}>;
}

export async function GET(request: Request, {params}:Params){
    const {id} = await params;

    const posts = await postService.findById(Number(id));

    if(!posts){
        return NextResponse.json({
            error: "Post Não Encontrado!"
        }, {status: 404});
    }

    return NextResponse.json(posts);
}

export async function PUT(request: Request, {params}: Params){

    // o codigo abaixo do id, estava sem as chaves, por isso tava entrando no if
    const {id} = await params;

    const postId = Number(id);

    if(isNaN(postId)){
        return NextResponse.json({error: "ID Invalido!"}, {status: 400})
    }

    const body = await request.json();

    const result = updatePostSchema.safeParse(body);

    if(!result.success){
        return NextResponse.json({
            error: "Dados Invalidos!",
            details: result.error.flatten(),
        }, {status: 400});
    }

    try {
        const post = await postService.update(postId, result.data);

        return NextResponse.json(post);
    } catch (error) {
        if(error instanceof Error && error.message === "Post não encontrado"){
            return NextResponse.json({error: "Post não encontrado"},{status: 404});
        }

        return NextResponse.json({error: "Erro ao atualizar o post"}, {status: 500});
    }
}

export async function DELETE(request: Request, {params}: Params) {

    const {id} = await params;

    const postId = Number(id);
    
    if(isNaN(postId)){
        return NextResponse.json({
            error:"ID Invalido!"
        }, {status: 400})
    }

    try {
        await postService.delete(postId);

        return NextResponse.json({ message: "Post excluido com suceeso!"}, {status: 200})
    } catch (error) {
        if(error instanceof Error && error.message === "Post não encontrado"){
            return NextResponse.json({error: "Post não encontrado"},{status: 404});
        }

        return NextResponse.json({error: "Erro ao deletar o post"}, {status: 500});
    }
}
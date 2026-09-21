import { NextResponse } from "next/server";
import { postRepository } from "@/app/repositories/post.repository";
import { createPostSchema } from "@/app/schemas/post.schema";
import { postService } from "@/app/services/post.service";
import { requireAuth } from "@/app/lib/auth";

export async function GET() {
  const posts = await postService.findAll();

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  try {
    const user = await requireAuth();

    const body = await request.json();

    const result = createPostSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Dados Invalidos!",
          details: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const post = await postRepository.create(result.data);

    return NextResponse.json("Dados Enviados!", { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "Não autenticado") {
      return NextResponse.json(
        {
          error: "Não autenticado",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        error: "Erro ao criar post",
      },
      { status: 500 },
    );
  }
}

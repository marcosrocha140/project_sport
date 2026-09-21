import { registerUserSchemas } from "@/app/schemas/user.schema";
import { NextResponse } from "next/server";
import { userService } from "@/app/services/user.service";

export async function POST(request: Request) {
  const body = await request.json();

  const result = registerUserSchemas.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Dados inválidos",
        details: result.error.flatten(),
      },
      { status: 400 },
    );
  }

  try {
    const user = await userService.register(result.data);

    return NextResponse.json(
      {
        message: "Usuário cadastrado com sucesso!",
        user: {
          id: user.id,
          nome: user.nome,
          email: user.email,
          tipo: user.tipo,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof Error && error.message === "E-mail já cadastrado") {
      return NextResponse.json(
        {
          error: "Email já cadastrado",
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      {
        error: "Erro ao criar usuário",
      },
      { status: 500 },
    );
  }
}

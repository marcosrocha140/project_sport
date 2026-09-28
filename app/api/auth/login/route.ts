import { NextResponse } from "next/server";
import { userService } from "@/app/services/user.service";
import { loginUserSchemas } from "@/app/schemas/user.schema";
import { createToken } from "@/app/lib/auth-token";
export async function POST(request: Request) {
  const body = await request.json();

  const result = loginUserSchemas.safeParse(body);

  if (!result.success) {
    return NextResponse.json({
      error: "Dados Invalidos",
      details: result.error.flatten(),
    });
  }

  try {
    const user = await userService.login(result.data);

    const token = await createToken(user.id);

    const response =  NextResponse.json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        tipo: user.tipo,
        imagem: user.imagem,
      },
    });

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",

    });

    return response;
  
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Email ou senha Invalidos"
    ) {
      return NextResponse.json(
        {
          error: "Email ou senha Invalidos",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        error: "Erro ao realizar login",
      },
      { status: 500 },
    );
  }
}

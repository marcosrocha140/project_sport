import { NextResponse } from "next/server";
import { userService } from "@/app/services/user.service";
import { getCurrentUserId } from "@/app/lib/auth";

export async function GET() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return NextResponse.json(
      {
        error: "Não autenticado",
      },
      { status: 401 },
    );
  }

  const user = await userService.findById(userId);

  if (!user) {
    return NextResponse.json(
      {
        error: "Usuário não encontrado",
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        tipo: user.tipo,

    },
  });
}

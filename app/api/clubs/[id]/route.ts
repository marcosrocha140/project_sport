import { NextResponse } from "next/server";
import { clubRepository } from "@/app/repositories/club.repository";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const clube = await clubRepository.findById(Number(id));

    if (!clube) {
      return NextResponse.json({ error: "Clube não encontrado" }, { status: 404 });
    }

    return NextResponse.json(clube);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao buscar clube" }, { status: 500 });
  }
}

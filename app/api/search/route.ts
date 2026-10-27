import { NextResponse } from "next/server";
import { clubRepository } from "@/app/repositories/club.repository";
import { userService } from "@/app/services/user.service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    if (!query.trim()) {
      return NextResponse.json({ clubs: [], users: [] });
    }

    const [clubs, users] = await Promise.all([
      clubRepository.findAll({
        nome: {
          contains: query,
          mode: "insensitive",
        },
      }),
      userService.findAll(),
    ]);

    const filteredUsers = users.filter((user: any) =>
      user.nome.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json({ clubs, users: filteredUsers });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ clubs: [], users: [] }, { status: 500 });
  }
}

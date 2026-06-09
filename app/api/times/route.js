import { listTeams } from "@/services/teams.service";

export async function GET() {
  try {
    const teams = await listTeams();

    return Response.json(teams);
  } catch (error) {
    return Response.json(
      { error: "Erro ao buscar times" },
      { status: 500 }
    );
  }
}
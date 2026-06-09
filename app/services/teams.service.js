import { getAllTeams } from "@/app/repositories/teams.repository"

export async function listTeams() {
  const teams = await getAllTeams();

  return teams;
}
import { connectDB } from "@/app/lib/mongodb"

export async function getAllTeams() {
  const db = await connectDB();

  const teams = await db
    .collection("teams")
    .find({})
    .toArray();

  return teams.map((team) => ({
    ...team,
    _id: team._id.toString(),
  }));
}
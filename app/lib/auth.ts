import { cookies } from "next/headers";
import { userService } from "../services/user.service";
import { verifyToken } from "./auth-token";


export async function getCurrentUserId() {
    const cookieStore = await cookies();

    const token = cookieStore.get("auth_token")?.value;

    if(!token){
        return null;
    }

    try {
        const payload = await verifyToken(token);
        if(typeof payload.userId !== "number"){
            return null;
        }

        return payload.userId;
    } catch {
        return null;
    }
}

export async function requireAuth() {
  const userId = await getCurrentUserId();

  if(!userId){
    throw new Error("Não autenticado");
  }

  const user = await userService.findById(userId);

  if(!user){
    throw new Error("Usuário não encontrado");
  }

  return user;
}


export async function requireRole(role: string) {
    const user = await requireAuth();

    if(user.tipo !== role){
        throw new Error("Sem premissão");
    }
    
    return user;
}

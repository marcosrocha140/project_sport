import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/lib/auth-token";

export async function proxy(request: NextRequest) {

    const token = request.cookies.get("auth_token")?.value;

    if(!token){
        return NextResponse.redirect(new URL("/login", request.url));
        
    }

    try {
        await verifyToken(token);

        return NextResponse.next();
    } catch{
        const response = NextResponse.redirect(new URL("/login", request.url));

        response.cookies.delete("auth_token");

        return response
    }
    
}

export const config = {
  matcher: ["/"],
};
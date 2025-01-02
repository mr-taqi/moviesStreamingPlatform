import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  if (!token) {
    return NextResponse.redirect("/auth/signin");
  }
}

export const config = { matcher: ["/protected/:path*"] };
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Cookies from "js-cookie";

const protectedRoutes = ["/admin/panel"];
const publicRoutes = [
  "/admin/login",
  "/",
  "/faq",
  "/form",
  "/news",
  "/service",
];

const middleware = async (req) => {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = cookies().get("token")?.value;

  // const session = cookie ? await decrypt(cookie) : null;
  // console.log("Session: " + session);

  const userId = cookies().get("userId")?.value;

  if (isProtectedRoute && !userId && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
  }

  if (
    isProtectedRoute &&
    userId &&
    token &&
    !req.nextUrl.pathname.startsWith("/admin/panel")
  ) {
    return NextResponse.redirect(new URL("/admin/panel", req.nextUrl));
  }

  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionCookie = request.cookies.get("addis_eats_session");
  const pathname = request.nextUrl.pathname;

  // If no session exists, redirect to login and save destination in 'next'
  if (!sessionCookie?.value) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

/**
 * Narrow matcher: ONLY runs on private routes, never on images, static files, or public pages
 */
export const config = {
  matcher: ["/orders/:path*", "/checkout/:path*"],
};

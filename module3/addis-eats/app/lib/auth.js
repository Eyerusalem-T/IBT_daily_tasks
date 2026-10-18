import { cookies } from "next/headers";

const COOKIE_NAME = "addis_eats_session";

export const COOKIE_OPTIONS = {
  httpOnly: true, // Prevents document.cookie access from JavaScript scripts
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax", // CSRF defense
  path: "/",
  maxAge: 60 * 60 * 24, // 1 day
};

/**
 * Reads and verifies the current session cookie on the server
 */
export async function getSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME);

  if (!sessionCookie?.value) {
    return null;
  }

  try {
    const session = JSON.parse(sessionCookie.value);
    return session?.userId ? session : null;
  } catch {
    return null;
  }
}

/**
 * Creates session cookie on login
 */
export async function createSession(userId, name) {
  const cookieStore = await cookies();
  const sessionData = JSON.stringify({ userId, name, createdAt: Date.now() });
  cookieStore.set(COOKIE_NAME, sessionData, COOKIE_OPTIONS);
}

/**
 * Clears session cookie on logout
 */
export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

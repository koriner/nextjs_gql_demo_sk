import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json().catch(() => ({}));

  // Fake credentials (demo only)
  // TODO  modify the Typescript types for process.env to understand these variables
  const demoEmail = process.env.DEMO_EMAIL ?? '';
  const demoPassword = process.env.DEMO_PASSWORD ?? 'demo';

  if (email !== demoEmail || password !== demoPassword) {
    return NextResponse.json(
      { ok: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Fake session value
  // In reality: opaque session id or JWT reference, which may require
  // another round trip to the server to validate oAuth flows, possibly
  // with a database session. Must be considerered as security and logs and how long it'll take.
  const sessionValue = "demo-session";

  const response = NextResponse.json({ ok: true });

  response.cookies.set({
    name: "demo_session",
    value: sessionValue,
    httpOnly: true, // This means the server sets the cookie and the client side can't see it
    // secure: process.env.NODE_ENV === "production", // This means the cookie is only sent over HTTPS in production
    // I changed this because I'm testting loccally - not for prod.
    secure: false,
    sameSite: "lax",
    path: "/", // Default to the main domain path for cookies.
    maxAge: 60 * 60, // TTL 1 hour
  });

  return response;
}
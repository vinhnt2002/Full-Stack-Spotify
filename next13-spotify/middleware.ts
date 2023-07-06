import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

// IT HELP TO WORK WITHOUT AUTHENTICATION
// FOR USER see the Song With outSignIN

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({
    req,
    res,
  });

  await supabase.auth.getSession();
  return res;
}



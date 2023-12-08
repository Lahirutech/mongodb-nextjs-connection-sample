import { NextResponse } from "next/server";

export async function GET() {
  console.log("hit route checkdb", new Date().getSeconds());
  return new NextResponse("route endpoint");
}

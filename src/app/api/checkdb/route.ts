import { dbConnect, disconnect } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const con = await dbConnect();
  console.log("hit db connect", new Date().getSeconds());
  return new NextResponse("connected and disconnected");

  //   return NextResponse.json({ messsage: "Hello World" });
}

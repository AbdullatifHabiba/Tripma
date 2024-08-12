import { NextResponse } from "next/server";
import prisma from "@/utils/database";

// gat all places
export async function GET() {
  const places = await prisma.uniquePlace.findMany();
  return NextResponse.json(places);
}

// post array of places
export async function POST(request) {
  const body = await request.json();;
  const places = await prisma.uniquePlace.createMany({
    data: body,
  });
  return NextResponse.json(places);
}

// delete all places

export async function DELETE() {
  const places = await prisma.uniquePlace.deleteMany();
  return NextResponse.json(places);
}

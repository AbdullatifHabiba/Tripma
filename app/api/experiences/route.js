import { NextResponse } from "next/server";
import prisma from "@/utils/database";

// gat all places
export async function GET() {
  const experiences = await prisma.experience.findMany();
  return NextResponse.json(experiences);
}

// post array of experiences
export async function POST(request) {
  const body = await request.json();;
  const experiences = await prisma.experience.createMany({
    data: body,
  });
  return NextResponse.json(experiences);
}

// delete all experiences

export async function DELETE() {
  const experiences = await prisma.experience.deleteMany();
  return NextResponse.json(experiences);
}

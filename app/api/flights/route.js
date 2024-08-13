import {NextResponse } from 'next/server';
import prisma from '@/utils/database';


// get all flights
export async function GET() {
    const flights = await prisma.flight.findMany();
  return NextResponse.json(flights);
}

// post array of flights
export async function POST(request) {
    const data = await request.json();
    const flights = await prisma.flight.createMany({
        data: data
    });
    return NextResponse.json(flights);

}

// delete all flights
export async function DELETE() {
    const flights = await prisma.flight.deleteMany();
    return NextResponse.json(flights);
}

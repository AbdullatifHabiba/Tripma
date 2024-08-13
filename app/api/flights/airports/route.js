
// return only origins and destinations of flights for all flights
import { NextResponse } from 'next/server';
import prisma from '@/utils/database';
export async function GET() {
    const flights = await prisma.flight.findMany({
        select: {
            origin: true,
            destination: true
        }
    });
    return NextResponse.json(flights);
}
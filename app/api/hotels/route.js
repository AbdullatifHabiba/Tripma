import {NextResponse } from 'next/server';
import prisma from '@/utils/database';

// get all hotels
export async function GET() {
    const hotels = await prisma.hotel.findMany();
  return NextResponse.json(hotels);
}

// post array of hotels
export async function POST(request) {
    const { body } = request;
    const hotels = await prisma.hotel.createMany({
        data: body
    });
    return NextResponse.json(hotels);

}

// delete all hotels

export async function DELETE() {
    const hotels = await prisma.hotel.deleteMany();
    return NextResponse.json(hotels);
}


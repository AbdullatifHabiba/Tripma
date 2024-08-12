
import {NextResponse } from 'next/server';
import prisma from '@/utils/database';

// get all deals
export async function GET() {
    const deals = await prisma.deal.findMany();
  return NextResponse.json(deals);
}

// post array of deals
export async function POST(request) {
    const body = await request.json();;
    const deals = await prisma.deal.createMany({
        data: body
    });
    return NextResponse.json(deals);

}

// delete all deals

export async function DELETE() {
    const deals = await prisma.deal.deleteMany();
    return NextResponse.json(deals);
}

import { NextResponse } from 'next/server';
import prisma from '@/utils/database';

export async function GET(req) {
    const url = new URL(req.url);
    const queryParams = new URLSearchParams(url.search);
    const from = queryParams.get('from');
    const to = queryParams.get('to');
    const startDate = queryParams.get('startDate');
    const endDate = queryParams.get('endDate');
    const adults = queryParams.get('adults');
    const minors = queryParams.get('minors');

    console.log("backend", from, to, startDate, endDate, adults, minors);

    const whereConditions = {};

    if (from) {
        whereConditions.origin = { contains: from };
    }
    if (to) {
        whereConditions.destination = { contains: to };
    }
    if (startDate) {
        whereConditions.departure = { gte: new Date(startDate) };
    }
    if (endDate) {
        whereConditions.arrival = { lte: new Date(endDate) };
    }

    const flights = await prisma.flight.findMany({
        where: whereConditions
    });

    console.log("flights", flights);
    return NextResponse.json(flights);
}

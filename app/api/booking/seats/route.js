import prisma from '@/utils/database';
import { NextResponse } from 'next/server';



// update seat in departure and return flights
export async function PATCH(req) {
  const data = await req.json();
  const { departSeatId, returnSeatId, bookingId, departFlightId, returnFlightId } = data;

  const departSeat = await prisma.seat.update({
    where: { id: departSeatId , flightId: departFlightId},
    data: { available: false, bookingId },
  });

  const returnSeat = await prisma.seat.update({
    where: { id: returnSeatId , flightId: returnFlightId},
    data: { available: false, bookingId },
  });

  return NextResponse.json({ departSeat, returnSeat }, { status: 200 });
}
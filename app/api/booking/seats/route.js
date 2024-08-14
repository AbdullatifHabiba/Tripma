import prisma from '@/utils/database';
import { NextResponse } from 'next/server';

export async function PATCH(req) {
    const { bookingId, seatIds } = await req.json();
  
    const updatedSeats = await Promise.all(
      seatIds.map(seatId =>
        prisma.seat.update({
          where: { id: seatId },
          data: {
            available: false,
            bookingId: bookingId,
          },
        })
      )
    );
  
    return  NextResponse(JSON.stringify(updatedSeats), { status: 200 });
}
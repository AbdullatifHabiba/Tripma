import prisma from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { bookingId } = req.query;
  
    const booking = await prisma.booking.findUnique({
      where: { id: Number(bookingId) },
      include: {
        passengers: true,
        seats: true,
        departFlight: true,
        arriveFlight: true|| null,
        paymentMethod: true,
      },
    });
    return NextResponse.json({ booking }, { status: 200 });
    }
  
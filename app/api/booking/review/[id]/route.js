import prisma from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req,context) {
    const { id } = context.params;

    const booking = await prisma.booking.findUnique({
      where: { id: Number(id) },
      include: {
        passengers: true,
        seats: true,
        departFlight: true,
        arriveFlight: true|| null,
        paymentMethod: true,
        user: true,
      },
    });
    return NextResponse.json({ booking }, { status: 200 });
    }
  
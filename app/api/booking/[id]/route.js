import prisma from "@/utils/database";
import { NextResponse } from "next/server";

// get the flights details by booking id
export async function GET(req,context) {
    const { id } = context.params;
    const booking = await prisma.booking.findUnique({
        where: { id: Number(id) },
        include: {
            departFlight: true,
            arriveFlight: true,
        },
    });
    if (!booking) {
        return  NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    return  NextResponse.json({ booking }, { status: 200 });
}
import prisma from "@/utils/database";
import { NextResponse } from "next/server";
import { authOptions } from "@/utils/auth";
import { getToken } from "next-auth/jwt";

export async function GET(req, context) {
    const session = await getToken({req,  authOptions});
    console.log("token",session);

    const { id } = context.params;

    const booking = await prisma.booking.findUnique({
        where: { id: Number(id) },
        include: {
            departFlight: true,
            arriveFlight: true,
            passengers: true,
            seats: true

        },
    });

    if (!booking) {
        return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ booking }, { status: 200 });
}
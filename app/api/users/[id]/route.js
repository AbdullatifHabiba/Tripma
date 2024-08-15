import prisma from "@/utils/database";
import { NextResponse } from "next/server";
import { authOptions } from "@/utils/auth";
import { getToken } from "next-auth/jwt";

export async function GET(req, context) {
    const session = await getToken({ req, authOptions });

    const { id } = context.params;

    if (!session || session.user.id !== id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // return all bookings for a user 
    const bookings = await prisma.booking.findMany({
        where: { userId:id },
        include: {
            departFlight: true,
            arriveFlight: true,
            passengers: true,
            seats: true,
            paymentMethod: true
        },
    });
    return NextResponse.json({ bookings }, { status: 200 });
}

// delete all bookings for a user
export async function DELETE(req, context) {
    const { id } = context.params;

    const booking = await prisma.booking.deleteMany({
        where: { userId: id },
    });
    return NextResponse.json({ booking }, { status: 200 });
}
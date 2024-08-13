import { prisma } from "@/utils/database";
import { NextResponse } from "next/server";



export async function DELETE(req) {
    const { bookingId } = await req.json();

    try {
        // Check if booking exists
        const booking = await prisma.booking.findUnique({
            where: { id: bookingId },
        });

        if (!booking) {
            return  NextResponse.json({ error: "Booking not found" }, { status: 404 });
        }

        // Delete the booking, cascading the deletion to passengers, seats, etc.
        await prisma.booking.delete({
            where: { id: bookingId },
        });

        return  NextResponse.json({ message: "Booking canceled" }, { status: 200 });
    } catch (error) {
        console.error("Error canceling booking:", error);
        return  NextResponse.json({ error: "Error canceling booking" }, { status: 500 });
    }
}

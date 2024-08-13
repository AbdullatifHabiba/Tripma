import  prisma  from "@/utils/database";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

// /app/booking/create/route.js

export async function POST(req) {
    const { departFlightId, arriveFlightId } = await req.json();
    console.log(departFlightId, arriveFlightId);
   
    // Fetch the flight details
    const departFlight = await prisma.flight.findUnique({ where: { id: departFlightId } });
    const arriveFlight = await prisma.flight.findUnique({ where: { id: arriveFlightId } });
    
     console.log(departFlight, arriveFlight);
    if (!departFlight || !arriveFlight) {
        return  NextResponse.json({ error: "Flight not found" }, { status: 404 });
    }
    const booking = await prisma.booking.create({
        data: {
            bookingNumber: uuidv4(),
            totalPrice: 0,
            departFlightId: departFlightId,
            arriveFlightId: arriveFlightId,
        },
    });


    // Calculate the total price
    const totalPrice = departFlight.price + arriveFlight.price;

    // Update the total price
   booking=  await prisma.booking.update({
        where: { id: booking.id },
        data: {
            totalPrice: totalPrice,
        },
    });
    console.log(booking);

    return  NextResponse.json({ booking }, { status: 201 });
}
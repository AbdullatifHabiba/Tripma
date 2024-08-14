import prisma from "@/utils/database";
import { NextResponse } from "next/server";
// get all seats for a flight

export async function GET(req,context) {
    const { id } = context.params;
    const seats = await prisma.seat.findMany({
        where: {
            flightId: Number(id)
        }
    });
    return NextResponse.json({seats}, {status: 200});
}


// post array of seats for a flight

export async function POST(req,context) {
    const { id } = context.params;
    console.log(id);
    const data = await req.json();
    const seats = await prisma.seat.createMany({
        data: data.map(seat => {
            return {
                ...seat,
                flightId: Number(id)
            };
        })
    });
    return NextResponse.json({seats}, {status: 201});

}

// delete all seats for a flight

export async function DELETE(req,context) {

    const { id } = context.params;
    const seats = await prisma.seat.deleteMany({
        where: {
            flightId: Number(id)
        }
    });

    return NextResponse.json({seats}, {status: 200})
}

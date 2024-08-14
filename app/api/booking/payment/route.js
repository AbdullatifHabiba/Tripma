import prisma from "@/utils/database";
import { NextResponse } from "next/server";

export async function PATCH(req) {
    const { bookingId, paymentMethodId, totalPrice } = await req.json();
  
    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: {
        paymentMethodId,
        totalPrice,
      },
    });
  return NextResponse.json({updatedBooking}, { status: 200 });
}

// create a payment method and update booking with payment method id
export async function POST(req) {
    const { bookingId, paymentMethod } = await req.json();

    const paymentMethodRecord = await prisma.paymentMethod.create({
        data: paymentMethod
    });

    const updatedBooking = await prisma.booking.update({
        where: { id: bookingId },
        data: {
            paymentMethodId: paymentMethodRecord.id
        }
    });

    return NextResponse.json({updatedBooking}, {status: 201});
}
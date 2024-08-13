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
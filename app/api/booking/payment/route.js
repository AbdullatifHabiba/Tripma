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
/**
 * model PaymentMethod {
  id         Int       @id @default(autoincrement())
  type       String    // e.g., 'Visa', 'MasterCard', 'PayPal', etc.
  cardNumber String?
  expiryDate String?
  bookings   Booking[]
}
  model Booking {
  id              Int           @id @default(autoincrement())
  bookingNumber   String        @unique
  departFlightId  Int?
  arriveFlightId  Int?
  userId          Int?
  paymentMethodId Int?
  createdAt       DateTime      @default(now())
  totalPrice      Float
  passengers      Passenger[]
  seats           Seat[]
  user            User?         @relation(fields: [userId], references: [id], onDelete: Cascade)
  departFlight    Flight?       @relation("DepartFlight", fields: [departFlightId], references: [id], onDelete: Cascade)
  arriveFlight    Flight?       @relation("ArriveFlight", fields: [arriveFlightId], references: [id], onDelete: Cascade)
  paymentMethod   PaymentMethod? @relation(fields: [paymentMethodId], references: [id])

  @@index([userId])
  @@index([departFlightId])
  @@index([arriveFlightId])
}
 */
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
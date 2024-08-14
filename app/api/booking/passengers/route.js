import prisma from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { bookingId, passengers } = await req.json();

  console.log(bookingId, passengers);

  // Separate the creation of passengers and emergency contacts
  const passengerData = passengers.map(({ emergencyContactSameAsPassenger, ...passenger }) => ({
    firstName: passenger.firstName,
    middleName: passenger.middleName,
    lastName: passenger.lastName,
    suffix: passenger.suffix,
    email: passenger.email,
    phoneNumber: passenger.phoneNumber,
    redressNumber: passenger.redressNumber,
    knownTravellerNumber: passenger.knownTravellerNumber,    
    dateOfBirth: new Date(passenger.dateOfBirth).toISOString(),
    checkedBags: passenger.checkedBags,
    bookingId: Number(bookingId),
  }));

  try {
    // Create passengers
    const addedPassengers = await prisma.passenger.createMany({
      data: passengerData,
    });
    const passengerIds = await prisma.passenger.findMany({
      where: {
        bookingId: Number(bookingId),
      },
      select: {
        id: true,
      },
    });
    // Create emergency contacts if they are the same as the passenger
    for (const [index, passenger] of passengers.entries()) {
      if (passenger.emergencyContactSameAsPassenger) {
        await prisma.emergencyContact.create({
          data: {
            firstName: passenger.firstName,
            lastName: passenger.lastName,
            email: passenger.email,
            phoneNumber: passenger.phoneNumber,
            passengerId: passengerIds[index].id, // Assuming passenger ID is generated
          },
        });
      }
      else{
        await prisma.emergencyContact.create({
          data: {
            firstName: passenger.emergencyContactFirstName,
            lastName: passenger.emergencyContactLastName,
            email: passenger.emergencyContactEmail,
            phoneNumber: passenger.emergencyContactPhone,
            passengerId: Number(passengerIds[index].id), // Assuming passenger ID is generated
          },
        });
      }
    }

    return NextResponse.json({ addedPassengers }, { status: 201 });
  } catch (error) {
    console.error("Error creating passengers or emergency contacts:", error);
    // if there already exists a passenger with the same email
    if (error.code === "P2002") {
      return NextResponse.json({ error: "Passenger  already exists with this booking" }, { status: 400 });
    }
    
    return NextResponse.json({ error: "Failed to create passengers" }, { status: 500 });
  }
}

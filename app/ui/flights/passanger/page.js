'use client';
import { Footer1, Footer2 } from "@/Components/footer/footer";
import PassengerInformation from "@/Components/passanger-info/passanger";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function Passenger({searchParams}) {

    const { bookingId } = searchParams;
    console.log(bookingId);
    return (
       <>
        <Navbar />

        <PassengerInformation   bookingId={bookingId} />

        <Footer1 />
        <Footer2 />
       </>
    );
}

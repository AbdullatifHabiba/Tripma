'use client';
import { Footer1, Footer2 } from "@/Components/footer/footer";
import PassengerInformation from "@/Components/passanger-info/passanger";
import Navbar from "@/Components/Navbar";
import Payment from "@/Components/passanger-info/Payment";
import React from "react";
import { useSearchParams } from 'next/navigation';

export default function Passenger() {
    return (
       <>
        <Navbar />

        <PassengerInformation />

        <Footer1 />
        <Footer2 />
       </>
    );
}

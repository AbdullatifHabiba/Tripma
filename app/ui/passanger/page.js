'use client';
import { Footer1, Footer2 } from "@/Components/footer/footer";
import PassengerInformation from "@/Components/passanger-info/passanger";
import Navbar from "@/Components/Navbar";
import Payment from "@/Components/passanger-info/Payment";
import React, { useState } from "react";

export default function Passenger() {
    const [PaymentState, setPaymentState] = useState(true);
    return (
       <>
        <Navbar />

     { PaymentState ? <Payment />  : <PassengerInformation/> }

            <Footer1 />
            <Footer2 />
       </>
    );
}
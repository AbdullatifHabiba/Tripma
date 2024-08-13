'use client';
import FlightDetails from "@/Components/flight-details/FlightDetails";
import Navbar from "@/Components/Navbar";
import { useRouter } from "next/navigation";

export default async function search() {
  const API_URL = 'http://localhost:3000';
 
   const deals = await fetch(`${API_URL}/api/deals`).then((res) => res.json());
   const  uniquePlaces = await fetch(`${API_URL}/api/places`).then((res) => res.json());
   const flightDetailsData = await fetch(`${API_URL}/api/flights`).then((res) => res.json());
   const router = useRouter();
   const { from, to, date, passengers } = router.query;
    console.log(from, to, date, passengers);
  return (
    <>
      <Navbar />
      <div>
        <FlightDetails
          flightDetailsData={flightDetailsData}
          uniquePlaces={uniquePlaces}
          deals={deals}
        />
      </div>
    </>
  );
}

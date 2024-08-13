import FlightDetails from "@/Components/flight-details/FlightDetails";
import Navbar from "@/Components/Navbar";
import {deals, uniquePlaces, flightDetailsData} from "@/lib/data";

export default async function search() {
  const API_URL = process.env.SERVER_URL;
  let deals = deals;
  let uniquePlaces = uniquePlaces;
  let flightDetailsData = flightDetailsData;
  try {
    deals = await fetch(`${API_URL}/api/deals`).then((res) => res.json());
    uniquePlaces = await fetch(`${API_URL}/api/places`).then((res) => res.json());
    flightDetailsData = await fetch(`${API_URL}/api/flights`).then((res) => res.json());
  }
  catch (error) {
    console.error("An error occurred:", error);
  }
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

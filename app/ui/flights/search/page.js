import FlightDetails from "@/Components/flight-details/FlightDetails";
import Navbar from "@/Components/Navbar";

export default async function search() {
  const API_URL = process.env.SERVER_URL;
  const flightDetailsData = await fetch(`${API_URL}/api/flights`).then((res) =>
    res.json()
  );
  const uniquePlaces = await fetch(`${API_URL}/api/places`).then((res) =>
    res.json()
  );
  const deals = await fetch(`${API_URL}/api/deals`).then((res) => res.json());

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

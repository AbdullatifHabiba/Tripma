import FlightDetails from "@/Components/flight-details/FlightDetails";
import Navbar from "@/Components/Navbar";

export default async function search({ searchParams }) {


  const API_URL = process.env.SERVER_URL;
  const hasSearchParams = searchParams && Object.keys(searchParams).length > 0;

  const [flightDetailsData, uniquePlaces, deals] = await Promise.all([
    hasSearchParams
      ? fetch(
          `${API_URL}/api/flights/search?from=${searchParams.from}&to=${searchParams.to}&startDate=${searchParams.startDate}&endDate=${searchParams.endDate}&adults=${searchParams.adults}&minors=${searchParams.minors}`
        ).then((res) => res.json())
      : fetch(`${API_URL}/api/flights`).then((res) => res.json()),
    fetch(`${API_URL}/api/places`).then((res) => res.json()),
    fetch(`${API_URL}/api/deals`).then((res) => res.json()),
  ]);

  console.log("search", searchParams);

  return (
    <>
      <Navbar />
      <div>
        <FlightDetails
          
          flightDetailsData={flightDetailsData}
          uniquePlaces={uniquePlaces}
          deals={deals}
          searchParams={searchParams}
        />
      </div>
    </>
  );
}
import { Footer1, Footer2 } from "@/Components/footer/footer";
import PassengerInformation from "@/Components/passanger-info/passanger";
import Navbar from "@/Components/Navbar";

export default async function Passenger({ searchParams }) {
  const API_URL = process.env.SERVER_URL;
  const { bookingId } = searchParams;
  const flights = await fetch(`${API_URL}/api/booking/${bookingId}`).then(
    (res) => res.json()
  );
  return (
    <>
      <Navbar />

      <PassengerInformation bookingId={bookingId} flights={flights} />

      <Footer1 />
      <Footer2 />
    </>
  );
}

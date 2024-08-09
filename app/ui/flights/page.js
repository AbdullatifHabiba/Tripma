import DealsComponent from "@/Components/flights/deals";
import Home from "../../../Components/home/Home";
import PlacesComponent from "@/Components/flights/places";
import Reviews from "@/Components/flights/reviews";
import { Footer1, Footer2 } from "@/Components/footer/footer";
import { deals, uniquePlaces, reviews } from "../../../Components/lib/data";
import Link from "next/link";
import Navbar from "@/Components/Navbar";

export default function Flights() {
  

  return (
    <>
      <Navbar />
      <Home />
      <div className="flex flex-col items-center justify-center w-full">
      <DealsComponent flights={deals} >
          <div style={{ fontWeight: 'bold' }}>
          Find your next adventure with these <Link href={"/ui/deals"} style={{ color: 'blue' }}>flight deals</Link></div>
        </DealsComponent>
        <PlacesComponent places={uniquePlaces} allowExplore={true} >
          <div style={{ fontWeight: 'bold' }}>
          Find <Link href={"/ui/places"} style={{ color: 'blue' }}> Unique places</Link> to stay</div>
        </PlacesComponent>
        <Reviews reviews={reviews} />
        <Footer1 />
        <Footer2 />
      </div>
    </>
  );
}

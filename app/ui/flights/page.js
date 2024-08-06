import DealsComponent from "@/Components/flights/deals";
import Home from "../home/page";
import PlacesComponent from "@/Components/flights/places";
import Reviews from "@/Components/flights/reviews";
import { Footer1, Footer2 } from "@/Components/footer/footer";
import { deals, uniquePlaces, reviews } from "./data";

export default function Flights() {
  

  return (
    <>
      <Home />
      <div className="flex flex-col items-center justify-center w-full">
        <DealsComponent flights={deals} />
        <PlacesComponent places={uniquePlaces} />
        <Reviews reviews={reviews} />
        <Footer1 />
        <Footer2 />
      </div>
    </>
  );
}

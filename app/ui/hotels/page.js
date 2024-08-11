import PlacesComponent from "@/Components/flights/places";
import { hotels } from "../../../lib/data";
import Navbar from "@/Components/Navbar";
import ShopHotels from "@/Components/explore/hotels";

export default function Hotels() {
    return (
        <>
        <Navbar />
        <ShopHotels hotels={hotels} />
       
        </>
        
    );
    }
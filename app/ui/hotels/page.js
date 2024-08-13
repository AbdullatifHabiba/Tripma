import Navbar from "@/Components/Navbar";
import ShopHotels from "@/Components/explore/hotels";
import {hotels} from "@/lib/data";


export default async function Hotels() {
    // const API_URL = process.env.SERVER_URL;
    // const  hotels = await fetch(`${API_URL}/api/hotels`).then((res) => res.json());
    return (
        <>
        <Navbar />
        <ShopHotels hotels={hotels} />
       
        </>
        
    );
    }
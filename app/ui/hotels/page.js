import PlacesComponent from "@/Components/flights/places";
import { uniquePlaces } from "../flights/data";

export default function Hotels() {
    return (
        
            <PlacesComponent places={uniquePlaces} allowExplore={false}>
       
        </PlacesComponent>
        
    );
    }
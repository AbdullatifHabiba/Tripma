import { Footer1, Footer2 } from "@/Components/footer/footer";
import PassengerInformation from "@/Components/passanger-info/passanger";

export default function Passenger({children}) {
    return (
        <div>
           <PassengerInformation/>
           {children}
            <Footer1 />
            <Footer2 />
        </div>
    );
}
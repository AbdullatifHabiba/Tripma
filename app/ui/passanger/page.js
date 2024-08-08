import { Footer1, Footer2 } from "@/Components/footer/footer";
import PassengerInformation from "@/Components/passanger-info/passanger";
import Navbar from "@/Components/Navbar";

export default function Passenger({children}) {
    return (
       <>
        <Navbar />

        <div>
           <PassengerInformation/>
           {children}
            <Footer1 />
            <Footer2 />
        </div>
       </>
    );
}
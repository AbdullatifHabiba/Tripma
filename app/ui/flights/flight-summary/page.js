import { Footer1, Footer2 } from "@/Components/footer/footer";
import Navbar from "@/Components/Navbar";
import styles from "./Page.module.css";
import { FlightItem } from "@/Components/flight-details/FlightList";
import Image from "next/image";
import visa from "@/public/visa.svg";
import map from "@/public/map.svg";
import ShopHotels from "@/Components/explore/hotels";
import UniqueExperiences from "@/Components/explore/experinces";
import ShareTravel from "@/Components/explore/share-travel";
import Link from "next/link";
import { hotels, experiences, flightDetailsData, hotels } from "@/lib/data";
export default async function Page() {
  let hotels = hotels;
  let experiences = experiences;
  let flightDetailsData = flightDetailsData;

  try {
    const API_URL = process.env.SERVER_URL;
    hotels = await fetch(`${API_URL}/api/hotels`).then((res) => res.json());
    experiences = await fetch(`${API_URL}/api/experiences`).then((res) =>
      res.json()
    );
    flightDetailsData = await fetch(`${API_URL}/api/flights`).then((res) =>
      res.json()
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }

  const flight0 = flightDetailsData[0];
  const flight1 = flightDetailsData[1];

  return (
    <>
      <Navbar logined={true} />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {/* Booking confirmation */}
          <div className={styles.card}>
            <div className={styles.confirm}>
              <h1>Your flight has been booked successfully!</h1>
              <p className={styles.confirmationNumber}>
                Your confirmation number is <span>#381029404387</span>
              </p>
            </div>
            <h2 className={styles.sectionTitle} style={{ color: "#605DEC" }}>
              Bon voyage, Sophia!
            </h2>
            <h2 className={styles.subtitle}>
              Confirmation number: #381029404387
            </h2>
            <p>
              Thank you for booking your travel with Tripma! Below is a summary
              of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy
              of your booking confirmation to your email address. You can also
              find this page again in
              <Link
                href="/ui/my-trips"
                style={{ color: "#605DEC", margin: "0px 5px" }}
              >
                My trips.
              </Link>
            </p>
          </div>

          {/* Flight Summary */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Flight Summary</h2>
            <h3 className={styles.subtitle}>Departing February 25th, 2021</h3>
            <FlightItem
              airline={flight0.airline}
              logo={flight0.logo}
              duration={flight0.duration}
              departTime={flight0.departTime}
              arriveTime={flight0.arriveTime}
              stops={flight0.stops}
              stopInfo={flight0.stopInfo}
              price={flight0.price}
              className={styles.flightItem}
            />
            <h4 className={styles.bottomTitle}>
              {" "}
              Seat 9F (economy, window), 1 checked bag{" "}
            </h4>

            <h3 className={styles.subtitle}>Arriving March 5th, 2021</h3>
            <FlightItem
              airline={flight1.airline}
              logo={flight1.logo}
              duration={flight1.duration}
              departTime={flight1.departTime}
              arriveTime={flight1.arriveTime}
              stops={flight1.stops}
              stopInfo={flight1.stopInfo}
              price={flight1.price}
              className={styles.flightItem}
            />
            <h4 className={styles.bottomTitle}>
              {" "}
              Seat 4F (business, window), 1 checked bag{" "}
            </h4>
          </div>

          {/* Price Breakdown */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Price Breakdown</h2>
            <div className={styles.priceDetails}>
              <div className={styles.priceDetailsLeft}>
                <p>Departing Flight</p>
                <p>Returning Flight</p>
                <p>Baggage fees</p>
                <p>Seat upgrade (business)</p>
                <p>Subtotal</p>
                <p>Taxes (9.4%)</p>
                <p className={styles.totalAmount}> Amount Paid</p>
              </div>
              <div className={styles.priceDetailsRight}>
                <p>$251.50</p>
                <p>$251.50</p>
                <p>$0</p>
                <p>$199</p>
                <p>$702</p>
                <p>$66</p>
                <p className={styles.totalAmount}>$768</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Payment Method</h2>
            <div className={styles.paymentDetails}>
              <Image src={visa} alt="Visa" className={styles.paymentLogo} />
              <div className={styles.paymentInfo}>
                <p>Sophia Knowles</p>
                <div className={styles.visaNumber}>
                  <p>**** **** **** 3456</p>
                  <p>10/23</p>
                </div>
              </div>
            </div>
          </div>
          {/* share your travel */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Share Your Travel</h2>
            <h3>
              You can email your itinerary to anyone by entering their email
              address here.
            </h3>
            <ShareTravel />
          </div>
          {/* Flight Route */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Flight Route</h2>
            <div className={styles.flightRouteDetails}>
              <Image src={map} alt="map" />
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          {/* Shop Hotels */}
          <div className={styles.card}>
            <h2 className={styles.title}>Shop Hotels</h2>
            <p className={styles.subtitle}>
              Tripma partners with thousands of hotels to get you the best deal.
              Save up to 30% when you add a hotel to your trip.
            </p>
            <ShopHotels hotels={hotels} />
          </div>

          {/* Unique Experience */}
          <div className={styles.card}>
            <UniqueExperiences experiences={experiences} />
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
}

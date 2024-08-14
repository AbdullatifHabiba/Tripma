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
import {formatTime ,formatDate,getCardType }from "@/utils/functions";

export default async function Page({ searchParams }) {
  const { bookingId } = searchParams;
  const API_URL = process.env.SERVER_URL;

  const hotels = await fetch(`${API_URL}/api/hotels`).then((res) => res.json());
  const experiences = await fetch(`${API_URL}/api/experiences`).then((res) =>
    res.json()
  );
  const bookingData = await fetch(`${API_URL}/api/booking/review/${bookingId}`).then((res) =>
    res.json()
  );

  const passenger = bookingData.booking.passengers[0];
  const paymentMethod = bookingData.booking.paymentMethod;
  const flight0 = bookingData.booking.departFlight;
  const flight1 = bookingData.booking.arriveFlight;
  const seats = bookingData.booking.seats;

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
                Your confirmation number is <span>{bookingData.booking.bookingNumber}</span>
              </p>
            </div>
            <h2 className={styles.sectionTitle} style={{ color: "#605DEC" }}>
              Bon voyage, {passenger.firstName}!
            </h2>
            <h2 className={styles.subtitle}>
              Confirmation number: {bookingData.booking.bookingNumber}
            </h2>
            <p>
              Thank you for booking your travel with Tripma! Below is a summary
              of your trip. We’ve sent a copy of your booking confirmation to{" "}
              <a href={`mailto:${passenger.email}`} className={styles.emailLink}>
                {passenger.email}
              </a>
              . You can also find this page again in
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
            <h3 className={styles.subtitle}>{formatDate(flight0.departure)}</h3>
            <FlightItem
              airline={flight0.airline}
              logo={flight0.logo}
              duration={flight0.duration}
              departTime={formatTime(flight0.departure)}
              arriveTime={formatTime(flight0.arrival)}
              stops={flight0.stops}
              stopInfo={flight0.stopInfo}
              price={flight0.price}
              className={styles.flightItem}
            />
            <h4 className={styles.bottomTitle}>
              Seat {seats[0].row}{String.fromCharCode(65 + seats[0].col - 1)}{" "}
              ({seats[0].class ? "business" : "economy"},{" "}
              {seats[0].col === 1 ? "window" : "aisle"}), {passenger.checkedBags}{" "}
              checked bag
            </h4>

            <h3 className={styles.subtitle}>{formatDate(flight1.arrival)}</h3>
            <FlightItem
              airline={flight1.airline}
              logo={flight1.logo}
              duration={flight1.duration}
              departTime={formatTime(flight1.departure)}
              arriveTime={formatTime(flight1.arrival)}
              stops={flight1.stops}
              stopInfo={flight1.stopInfo}
              price={flight1.price}
              className={styles.flightItem}
            />
            <h4 className={styles.bottomTitle}>
              Seat {seats[1].row}{String.fromCharCode(65 + seats[1].col - 1)}{" "}
              ({seats[1].class ? "business" : "economy"},{" "}
              {seats[1].col === 1 ? "window" : "aisle"}), {passenger.checkedBags}{" "}
              checked bag
            </h4>
          </div>

          {/* Price Breakdown */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Price Breakdown</h2>
            <div className={styles.priceDetails}>
              <div className={styles.priceDetailsLeft}>
                <p>Departing Flight</p>
                <p>Arriving Flight</p>
                <p>Baggage fees</p>
                <p>Seat upgrade (business)</p>
                <p>Subtotal</p>
                <p>Taxes (9.4%)</p>
                <p className={styles.totalAmount}>Amount Paid</p>
              </div>
              <div className={styles.priceDetailsRight}>
                <p>${flight0.price}</p>
                <p>${flight1.price}</p>
                <p>$0</p>
                <p>{seats[0].class ? "$199" : "$0"}</p>
                <p>${bookingData.booking.totalPrice}</p>
                <p>${(bookingData.booking.totalPrice * 0.094).toFixed(2)}</p>
                <p className={styles.totalAmount}>${(bookingData.booking.totalPrice * 1.094).toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Payment Method</h2>
            <div className={styles.paymentDetails}>
              {/* <Image src={visa} alt="Visa" className={styles.paymentLogo} /> */}
              <div className={styles.paymentLogo} >{getCardType(paymentMethod.cardNumber)}  </div>
              <div className={styles.paymentInfo}>
                <p>{paymentMethod.name}</p>
                <div className={styles.visaNumber}>
                  <p>**** **** **** {paymentMethod.cardNumber.slice(-4)}</p>
                  <p>{paymentMethod.expiryDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Share Your Travel */}
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

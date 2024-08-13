import React from "react";
import styles from "./FlightDetails.module.css";
import Image from "next/image";
import { formatTime } from "@/utils/functions";
import { useRouter } from "next/navigation";
const cardItem = ({ flight }) => {
  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineLogo}>
        <Image src={flight.logo} alt={flight.airline} fill />
      </div>
      <div className={styles.airline}>
        <span>{flight.airline}</span>
        <span className={styles.label}>{flight.flightNumber}</span>
      </div>
      <div className={styles.details}>
        <span>{flight.duration} (+1d)</span>
        <span>
          {formatTime(flight.departure)} - {formatTime(flight.arrival)}
        </span>
        <span className={styles.label}>{flight.stopInfo}</span>
      </div>
    </div>
  );
};

const FlightSelectCard = ({
  departingFlight,
  returningFlight,
  pass = true,
}) => {
  const router = useRouter();
  const calculateTotalCost = () => {
    if (!departingFlight) return null;
    const departingPrice = Number(departingFlight.price) || 0;
    const returningPrice = returningFlight ? Number(returningFlight.price) : 0;
    const taxesAndFees = 121;
    return departingPrice + returningPrice + taxesAndFees;
  };

  const totalCost = calculateTotalCost();
  const createIntialBooking = async () => {
    const flightsID = {
      departFlightId: departingFlight.id,
      arriveFlightId: returningFlight.id,
    };
    const data = await fetch("/api/booking/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flightsID),
    });
    const { booking } = await data.json();
    router.push(`/ui/flights/passanger?bookingId=${booking["id"]}`);
  };

  return (
    <div className={styles.priceGrid}>
      <div className={styles.flightSelectCard}>
        {departingFlight && cardItem({ flight: departingFlight })}
        {returningFlight && cardItem({ flight: returningFlight })}
      </div>

      <div className={styles.totalCost}>
        {departingFlight && !returningFlight && (
          <>
            <pre> Subtotal ${+departingFlight.price}</pre>
            <pre>Taxes and Fees $121</pre>
            <pre>
              <strong> Total ${totalCost}</strong>
            </pre>
            <button className={styles.saveCloseBtn}>Save and Close</button>
          </>
        )}
        {departingFlight && returningFlight && (
          <>
            <pre> Subtotal ${totalCost - 121}</pre>
            <pre>Taxes and Fees $121</pre>
            <pre>
              <strong> Total ${totalCost}</strong>
            </pre>
            {pass && (
              <button
                // href={{
                //   pathname: '/ui/flights/passanger',
                //   query:{bookingId:booking.id}
                // }}
                className={styles.passengerInfoBtn}
                onClick={createIntialBooking} // Remove the parentheses from the onClick event
              >
                Passenger Information
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FlightSelectCard;

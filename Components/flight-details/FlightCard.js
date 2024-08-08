import React from "react";
import styles from "./FlightDetails.module.css";
import Image from "next/image";
import Link from "next/link";
const cardItem = ({ flight }) => {
  return (
    <div className={styles.flightCard}>
      <Image
        src={flight.logo}
        alt={flight.airline}
        className={styles.airlineLogo}
      />
      <div className={styles.airline}>
        <span>{flight.airline}</span>
        <span className={styles.label}>FA123</span>
      </div>
      <div className={styles.details}>
        <span>{flight.duration} (+1d)</span>
        <span>
          {flight.departTime} - {flight.arriveTime}
        </span>
        <span className={styles.label}>{flight.stopInfo}</span>
      </div>
    </div>
  );
};

const FlightSelectCard = ({ departingFlight, returningFlight ,pass=true}) => {
  const calculateTotalCost = () => {
    if (!departingFlight) return null;
    const departingPrice = Number(departingFlight.price) || 0;
    const returningPrice = returningFlight ? Number(returningFlight.price) : 0;
    const taxesAndFees = 121;
    return departingPrice + returningPrice + taxesAndFees;
  };

  const totalCost = calculateTotalCost();

  return (
    <div className={styles.priceGrid}>
      <div className={styles.flightSelectCard}>
        {departingFlight && cardItem({ flight: departingFlight })}
        {returningFlight && cardItem({ flight: returningFlight })}
      </div>

      <div className={styles.totalCost}>
        {departingFlight && !returningFlight && (
          <>
            <pre>      Subtotal           ${+departingFlight.price}</pre>
            <pre>Taxes and Fees      $121</pre>
            <pre>
         <strong>          Total     ${totalCost}</strong>
            </pre>
            <button className={styles.saveCloseBtn}>Save and Close</button>
          </>
        )}
        {departingFlight && returningFlight && (
          <>
            <pre>      Subtotal      ${totalCost - 121}</pre>
            <pre>Taxes and Fees      $121</pre>
            <pre>
         <strong>          Total     ${totalCost}</strong>
            </pre>
           { pass&& <Link href="/ui/passanger" className={styles.passengerInfoBtn}>
              Passenger Information
            </Link>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default FlightSelectCard;

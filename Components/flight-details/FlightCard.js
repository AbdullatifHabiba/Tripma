import React from 'react';
import styles from './FlightDetails.module.css';
import Image from 'next/image';

const FlightSelectCard = ({ departingFlight, returningFlight }) => {
  
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
        {departingFlight && (
          <div className={styles.flightCard}>
            <Image src={departingFlight.logo} alt={departingFlight.airline} className={styles.airlineLogo} />
            <div className={styles.airline}>
              <span>{departingFlight.airline}</span>
              <span className={styles.label}>FA123</span>
            </div>
            <div className={styles.details}>
              <span>{departingFlight.duration} (+1d)</span>
              <span>{departingFlight.departTime} - {departingFlight.arriveTime}</span>
              <span className={styles.label}>{departingFlight.stopInfo}</span>
            </div>
          </div>
        )}
        {returningFlight && (
          <div className={styles.flightCard}>
            <Image src={returningFlight.logo} alt={returningFlight.airline} className={styles.airlineLogo} />
            <div className={styles.airline}>
              <span>{returningFlight.airline}</span>
              <span className={styles.label}>FA123</span>
            </div>
            <div className={styles.details}>
              <span>{returningFlight.duration} (+1d)</span>
              <span>{returningFlight.departTime} - {returningFlight.arriveTime}</span>
              <span className={styles.label}>{returningFlight.stopInfo}</span>
            </div>
          </div>
        )}
      </div>

      <div className={styles.totalCost}>
        {departingFlight && !returningFlight && (<>
             <p>Subtotal: ${+departingFlight.price }</p>
             <p>Taxes and Fees: $121</p>
             <p><strong>Total: ${totalCost}</strong></p>
          <button className={styles.saveCloseBtn}>
            Save and Close
          </button>
          </>
        )}
        {departingFlight && returningFlight && (
          <>
            <p>Subtotal: ${totalCost-121}</p>
            <p>Taxes and Fees: $121</p>
            <p><strong>Total: ${totalCost}</strong></p>
            <button className={styles.passengerInfoBtn}>
              Passenger Information
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FlightSelectCard;

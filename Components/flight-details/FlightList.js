import React from "react";
import styles from "./FlightDetails.module.css";
import Image from "next/image";
import { formatTime } from "@/utils/functions";
const FilterOptions = () => (
  <div className={styles.filterOptions}>
    <div className={styles.selectOptions}>
      <select>
        <option>Max price</option>
        <option>Max price</option>
        <option>Max price</option>
      </select>
    </div>
    <div className={styles.selectOptions}>
      <select>
        <option>Stops</option>
        <option>Max price</option>
        <option>Max price</option>
      </select>
    </div>
    <div className={styles.selectOptions}>
      <select>
        <option>Times</option>
      </select>
    </div>
    <div className={styles.selectOptions}>
      <select>
        <option>Airlines</option>
      </select>
    </div>
    <div className={styles.selectOptions}>
      <select>
        <option>Seat class</option>
      </select>
    </div>
    <div className={styles.selectOptions}>
      <select>
        <option>More</option>
      </select>
    </div>
  </div>
);

export const FlightItem = ({
  airline,
  logo,
  duration,
  departTime,
  arriveTime,
  stops,
  stopInfo,
  price,
}) => (
  <div className={styles.flightItem}>
  <div className={styles.airlineLogo}  >
         <Image src={logo} alt={airline} fill />
      </div>
    <div className={styles.dataRowCombined}>
    

      <div className={styles.dataRowPrimary}>
        <span className={styles.label}>{duration}</span>
        <span className={styles.label}>
          {departTime} - {arriveTime}
        </span>
        <span className={styles.labelRight}>{stops} stop</span>
        <span className={styles.labelRight}>${price}</span>
      </div>
      <div className={styles.dataRowSecondary}>
        <span className={styles.label}>{airline}</span>
        <span className={styles.label}></span>
        <span className={styles.labelRight}>
          {stopInfo.length > 13 ? `${stopInfo.slice(0, 13)}...` : stopInfo}
        </span>
        <span className={styles.labelRight}>round trip</span>
      </div>
    </div>
  </div>
);



const FlightList = ({ onFlightSelect, flightDetailsData, children }) => (
  <>
    {children}

    <div className={styles.flightList}>
      {flightDetailsData.map((flight, index) => (
        <div key={index} onClick={() => onFlightSelect(flight)}>
          <FlightItem
            airline={flight.airline}
            logo={flight.logo}
            duration={flight.duration}
            departTime={formatTime(flight.departure)}
            arriveTime={formatTime(flight.arrival)}
            stops={flight.stops}
            stopInfo={flight.stopInfo}
            price={flight.price}
          />
          <hr />
        </div>
      ))}
    </div>
    <button className={styles.showAllFlights}>Show all flights</button>
  </>
);



export { FilterOptions, FlightList };

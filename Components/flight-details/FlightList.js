import React from "react";
import styles from "./FlightDetails.module.css";
import Image from "next/image";
import { flightDetailsData } from "@/app/ui/flights/data";

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

const FlightItem = ({
  airline,
  logo,
  duration,
  departTime,
  arriveTime,
  stops,
  stopInfo,
  price,
}) => (
  <>
    <Image src={logo} alt={airline} className={styles.airlineLogo} />

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
  </>
);



const FlightList = ({ onFlightSelect, children }) => (
  <>
    {children}

    <div className={styles.flightList}>
      {flightDetailsData.map((flight, index) => (
        <div className={styles.flightItem} key={index}
        onClick={() => onFlightSelect(flight)}>
          <FlightItem
            airline={flight.airline}
            logo={flight.logo}
            duration={flight.duration}
            departTime={flight.departTime}
            arriveTime={flight.arriveTime}
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

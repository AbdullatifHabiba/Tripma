import React from "react";
import styles from "./FlightDetails.module.css";
import Image from "next/image";
import logo1 from "@/public/static/logos/Air China.svg";
import logo2 from "@/public/static/logos/Air France.svg";
import logo3 from "@/public/static/logos/EVA Air.svg";
import logo4 from "@/public/static/logos/Japan Airlines.svg";
import logo5 from "@/public/static/logos/Korean Air.svg";
import logo6 from "@/public/static/logos/Emirates.svg";

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
  <div className={styles.flightData}>
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
  </div>
);

const flightDetails = [
  {
    airline: "Hawaiian Airlines",
    logo: logo1,
    duration: "16h 45m",
    departTime: "7:00AM",
    arriveTime: "4:15PM",
    stops: "1",
    stopInfo: "2h 45m in HNL",
    price: "624",
  },
  {
    airline: "Hawaiian Airlines",
    logo: logo2,
    duration: "16h 45m",
    departTime: "7:00AM",
    arriveTime: "4:15PM",
    stops: "1",
    stopInfo: "2h 45m in HNL",
    price: "624",
  },
  {
    airline: "Hawaiian Airlines",
    logo: logo3,
    duration: "16h 45m",
    departTime: "7:00AM",
    arriveTime: "4:15PM",
    stops: "1",
    stopInfo: "2h 45m in HNL",
    price: "624",
  },
  // Add more flight details here
  {
    airline: "Delta Airlines",
    logo: logo4,
    duration: "10h 30m",
    departTime: "9:30AM",
    arriveTime: "8:00PM",
    stops: "0",
    stopInfo: "Non-stop",
    price: "450",
  },
  {
    airline: "United Airlines",
    logo: logo5,
    duration: "8h 15m",
    departTime: "1:45PM",
    arriveTime: "10:00PM",
    stops: "1",
    stopInfo: "1h 30m in ORD",
    price: "520",
  },
  {
    airline: "American Airlines",
    logo: logo6,
    duration: "12h 10m",
    departTime: "6:00AM",
    arriveTime: "6:10PM",
    stops: "2",
    stopInfo: "2h 30m in DFW, 1h 45m in MIA",
    price: "680",
  },
  {
    airline: "Delta Airlines",
    logo: logo4,
    duration: "10h 30m",
    departTime: "9:30AM",
    arriveTime: "8:00PM",
    stops: "0",
    stopInfo: "Non-stop",
    price: "450",
  },
  {
    airline: "United Airlines",
    logo: logo5,
    duration: "8h 15m",
    departTime: "1:45PM",
    arriveTime: "10:00PM",
    stops: "1",
    stopInfo: "1h 30m in ORD",
    price: "520",
  },
  {
    airline: "American Airlines",
    logo: logo6,
    duration: "12h 10m",
    departTime: "6:00AM",
    arriveTime: "6:10PM",
    stops: "2",
    stopInfo: "2h 30m in DFW, 1h 45m in MIA",
    price: "680",
  },
];

const FlightList = ({ onFlightSelect, children }) => (
  <>
    {children}

    <div className={styles.flightList}>
      {flightDetails.map((flight, index) => (
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

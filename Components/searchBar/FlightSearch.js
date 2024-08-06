"use client";
import styles from "./Search.module.css";
import Image from "next/image";
import depart from "../../public/departure.png";
import arrival from "../../public/arrival.png";
import Dropdown from "./Dropdown";
import Calendar from "./Calendar";
import PassengerSelector from "./PassengerSelector";



const FlightSearch = () => {
  const options = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

  return (
    <div className={styles.flightSearch}>
      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={depart} alt="departure" />
          </div>
          <Dropdown options={options} label="From Where?" />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={arrival} alt="arrival" />
          </div>
          <Dropdown options={options} label="To Where?" />
        </div>
      </div>

      <div className={styles.divider}></div>

      <Calendar />

      <div className={styles.divider}></div>

    
      <PassengerSelector/>
      <div className={styles.button}>
        <div className={styles.label}>Search</div>
      </div>
    </div>
  );
};

export default FlightSearch;

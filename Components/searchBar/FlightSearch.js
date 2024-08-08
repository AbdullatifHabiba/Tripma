"use client";
import styles from "./Search.module.css";
import Image from "next/image";
import depart from "../../public/departure.png";
import arrival from "../../public/arrival.png";
import Dropdown from "./Dropdown";
import Calendar from "./Calendar";
import PassengerSelector from "./PassengerSelector";
import Link from "next/link";

const FlightSearch = ({ width }) => {
  const options = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

  return (
    <div className={styles.flightSearch} style={{ width: width }}>
      <div className={styles.textInput} style={{ width: width / 5 }}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={depart} alt="departure" />
          </div>
          <Dropdown options={options} label="From Where?" />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput} style={{ width: width / 5 }}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={arrival} alt="arrival" />
          </div>
          <Dropdown options={options} label="To Where?" />
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput} style={{ width: width / 5 }}>
        <Calendar />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput} style={{ width: width / 5 }}>
        <PassengerSelector />
      </div>

      <div className={styles.button}>
        <div className={styles.label}>
          <Link href="/ui/flights/search">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;

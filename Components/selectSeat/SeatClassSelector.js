"use client";
import React, { useState, useEffect } from "react";
import styles from "./SeatClassSelector.module.css";
import Image from "next/image";
import ecoChair from "@/public/static/images/economyChairs.svg";
import businessChair from "@/public/static/images/businessChairs.svg";
import dot from "@/public/dot.svg";
import check from "@/public/check_green.svg";
import arrow from "@/public/right-arrow.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const FLIGHT_INFO = {
  departing: { date: "Feb 25", time: "7:00AM", label: "Departing" },
  arriving: { date: "Mar 21", time: "12:15PM", label: "Arriving" },
};

const PASSENGER_INFO = {
  name: "Sofia Knowles",
  seat: { row: 12, col: 3 },
};

const SelectedDiv = ({ selected }) => (
  <div className={selected ? styles.selectbus : styles.selectecon}>selected</div>
);

const UpgradeCard = ({ handleCancelClick, handleUpgradeClick }) => (
  <div className={styles["upgrade-card"]}>
    <h3>Upgrade seat</h3>
    <p>
      Upgrade your seat for only $199, and enjoy 45 percent more leg room, and
      seats that recline 40 percent more than economy.
    </p>
    <div className={styles["card-buttons"]}>
      <button className={styles["cancel-button"]} onClick={handleCancelClick}>
        Cancel
      </button>
      <button className={styles["upgrade-button"]} onClick={handleUpgradeClick}>
        Upgrade for $199
      </button>
    </div>
  </div>
);

const SeatClassSelector = ({ selectedSeat }) => {
  const router = useRouter();
  const [departing, setDeparting] = useState(true);
  const [isBusiness, setIsBusiness] = useState(false);
  const [allowUpgrade, setAllowUpgrade] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [departingSeatSelected, setDepartingSeatSelected] = useState(false);
  const [arrivingSeatSelected, setArrivingSeatSelected] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const getLetterFromNumber = (number) => String.fromCharCode("A".charCodeAt(0) + number - 1);

  const handleDepartingClick = () => setDeparting(true);
  const handleArrivingClick = () => setDeparting(false);
  const handleUpgradeClick = () => {
    setIsBusiness(true);
    setAllowUpgrade(false);
  };
  const handleCancelClick = () => setAllowUpgrade(false);

  const handleSeatSelection = () => {
    if (departing) {
      setDepartingSeatSelected(true);
    } else {
      setArrivingSeatSelected(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <div className={styles.flightInfo}> */}
         <div className={styles.flightInfoLeft}>
          <div className={styles.location}>
            <h4>SFO</h4>
            <span>California, US</span>
          </div>
          <Image src={arrow} alt="arrow" />
          <div className={styles.location}>
            <h4>NRT</h4>
            <span>Tokyo, Japan</span>
          </div>
        </div>
          
          <div className={`${styles.flightDetails} ${departing ? styles.selected : ""}`}
            onClick={handleDepartingClick}
          >
            <span>{FLIGHT_INFO.departing.date} | {FLIGHT_INFO.departing.time}</span>
            <span style={{ fontSize: "small" }}>{FLIGHT_INFO.departing.label}</span>
          </div>
          
          <div
            className={`${styles.flightDetails} ${!departing ? styles.selected : ""}`}
            onClick={handleArrivingClick}
          >
            <span>{FLIGHT_INFO.arriving.date} | {FLIGHT_INFO.arriving.time}</span>
            <span style={{ fontSize: "small" }}>{FLIGHT_INFO.arriving.label}</span>
          </div>
        {/* </div> */}
      </div>

      <div className={styles.classes}>
        <div className={styles.class}>
          <Image src={ecoChair} alt="Economy class" />
          <h3>
            Economy {!isBusiness && <SelectedDiv selected={isBusiness} />}
          </h3>
          <p>
            Rest and recharge during your flight with extended leg room,
            personalized service, and a multi-course meal service
          </p>
          <ul className={styles.inlineList}>
            <li><Image src={dot} alt="dot" /> Built-in entertainment system</li>
            <li><Image src={dot} alt="dot" /> Complimentary snacks and drinks</li>
            <li><Image src={dot} alt="dot" /> One free carry-on and personal item</li>
          </ul>
        </div>
        <div className={styles.class}>
          <Image src={businessChair} alt="Business class" />
          <h3>
            Business class {isBusiness && <SelectedDiv selected={isBusiness} />}
          </h3>
          <p>
            Rest and recharge during your flight with extended leg room,
            personalized service, and a multi-course meal service
          </p>
          <ul className={styles.inlineList}>
            <li><Image src={check} alt="check" /> Extended leg room</li>
            <li><Image src={check} alt="check" /> First two checked bags free</li>
            <li><Image src={check} alt="check" /> Priority boarding</li>
            <li><Image src={check} alt="check" /> Personalized service</li>
            <li><Image src={check} alt="check" /> Enhanced food and drink service</li>
            <li><Image src={check} alt="check" /> Seats that recline 40% more than economy</li>
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.passengerInfo}>
          <div>
            <span>Passenger 1</span>
            <h4>{PASSENGER_INFO.name}</h4>
          </div>
          <div>
            <span>Seat number</span>
            <h4>
              {selectedSeat?.row}
              {getLetterFromNumber(selectedSeat?.col)}
            </h4>
          </div>
        </div>
        <div className={styles.footerButtons}>
          <button className={styles.button} onClick={handleSeatSelection}>Save and close</button>
          {departingSeatSelected && !arrivingSeatSelected ? (
            <button
              className={`${styles.buttonPrimary} ${selectedSeat ? styles.selected : ""}`}
              onClick={() => {
                setAllowUpgrade(true);
                handleArrivingClick();
              }}
            >
              Next Flight
            </button>
          ) : (
            arrivingSeatSelected && (
              <Link
                className={`${styles.buttonPrimary} ${selectedSeat ? styles.selected : ""}`}
                href={{ pathname: '/ui/flights/passanger/payment' }}
              >
                Payment
              </Link>
            )
          )}
        </div>
      </div>
      {allowUpgrade && (
        <UpgradeCard
          handleCancelClick={handleCancelClick}
          handleUpgradeClick={handleUpgradeClick}
        />
      )}
    </div>
  );
};

export default SeatClassSelector;
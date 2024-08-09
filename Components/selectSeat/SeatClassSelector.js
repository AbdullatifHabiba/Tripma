'use client';
import React, { useState, useEffect } from "react";
import styles from "./SeatClassSelector.module.css";
import Image from "next/image";
import ecoChair from "@/public/static/images/economyChairs.svg";
import businessChair from "@/public/static/images/businessChairs.svg";
import dot from "@/public/dot.svg";
import check from "@/public/check_green.svg";
import arrow from "@/public/right-arrow.svg";

const SelectedDiv = ({ selected }) => {
  return selected ? (
    <div className={styles.selectbus}>selected</div>
  ) : (
    <div className={styles.selectecon}>selected</div>
  );
};

const SeatClassSelector = ({ selectedSeat }) => {
  const getLetterFromNumber = (number) => {
    const baseCharCode = "A".charCodeAt(0);
    return String.fromCharCode(baseCharCode + number - 1);
  };

  const [departing, setDeparting] = useState(true);
  const [isBusiness, setIsBusiness] = useState(false);
  const [allowUpgrade, setAllowUpgrade] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing on the server
  }

  const handleDepartingClick = () => {
    setDeparting(true);
  };

  const handleArrivingClick = () => {
    setDeparting(false);
  };

  const handleUpgradeClick = () => {
    setIsBusiness(true);
    setAllowUpgrade(false);
  };

  const handleCancelClick = () => {
    setAllowUpgrade(false);
  };

  return (
    <div className={styles.container}>
      {/* Header with flight information */}
      <div className={styles.header}>
        <div className={styles.flightInfo}>
          <div className={styles.location}>
            <h4>SFO</h4>
            <span>California, US</span>
          </div>
          <Image src={arrow} alt="arrow" />
          <div className={styles.location}>
            <h4>NRT</h4>
            <span>Tokyo, Japan</span>
          </div>
          |
          <div
            className={`${styles.flightDetails} ${
              departing ? styles.selected : ""
            }`}
            onClick={handleDepartingClick}
          >
            <span>Feb 25 | 7:00AM</span>
            <span style={{ fontSize: "small" }}>Departing</span>
          </div>
          |
          <div
            className={`${styles.flightDetails} ${
              !departing ? styles.selected : ""
            }`}
            onClick={handleArrivingClick}
          >
            <span>Mar 21 | 12:15PM</span>
            <span style={{ fontSize: "small" }}>Arriving</span>
          </div>
        </div>
      </div>

      {/* Classes selection */}
      <div className={styles.classes}>
        <div className={`${styles.class} `}>
          <Image src={ecoChair} alt="Economy class" />
          <h3>
            Economy {!isBusiness && <SelectedDiv selected={isBusiness} />}
          </h3>
          <p>
            Rest and recharge during your flight with extended leg room,
            personalized service, and a multi-course meal service
          </p>
          <ul className={styles.inlineList}>
            <li>
              <Image src={dot} alt="dot" />
              Built-in entertainment system
            </li>
            <li>
              <Image src={dot} alt="dot" />
              Complimentary snacks and drinks
            </li>
            <li>
              <Image src={dot} alt="dot" />
              One free carry-on and personal item
            </li>
          </ul>
        </div>
        <div className={styles.class}>
          <Image src={businessChair} alt="Economy class" />
          <h3>
            Business class{" "}
            {isBusiness && <SelectedDiv selected={isBusiness} />}
          </h3>
          <p>
            Rest and recharge during your flight with extended leg room,
            personalized service, and a multi-course meal service
          </p>
          <ul className={styles.inlineList}>
            <li>
              <Image src={check} alt="dot" />
              Extended leg room
            </li>
            <li>
              <Image src={check} alt="dot" /> First two checked bags free
            </li>
            <li>
              <Image src={check} alt="dot" /> Priority boarding
            </li>
            <li>
              <Image src={check} alt="dot" /> Personalized service
            </li>
            <li>
              <Image src={check} alt="dot" /> Enhanced food and drink service
            </li>
            <li>
              <Image src={check} alt="dot" /> Seats that recline 40% more than
              economy
            </li>
          </ul>
        </div>
      </div>

      {/* Footer with passenger info and buttons */}
      <div className={styles.footer}>
        <div className={styles.passengerInfo}>
          <div>
            <span>Passenger 1</span>
            <h4>Sofia Knowles</h4>
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
          <button className={styles.button}>Save and close</button>
          <button
            className={`${styles.buttonPrimary} ${
              selectedSeat ? styles.selected : ""
            }`}
            onClick={() => {
              setAllowUpgrade(true);
            }}
          >
            Next Flight
          </button>
        </div>
      </div>
      {allowUpgrade && (
        <UpgradeCard
          setIsBusiness={setIsBusiness}
          setAllowUpgrade={setAllowUpgrade}
          handleCancelClick={handleCancelClick}
          handleUpgradeClick={handleUpgradeClick}
        />
      )}
    </div>
  );
};

const UpgradeCard = ({ setIsBusiness, setAllowUpgrade, handleCancelClick, handleUpgradeClick }) => {
  return (
    <div className={styles["upgrade-card"]}>
      <h3>Upgrade seat</h3>
      <p>
        Upgrade your seat for only $199, and enjoy 45 percent more leg room, and
        seats that recline 40 percent more than economy.
      </p>
      <div className={styles["card-buttons"]}>
        <button
          className={styles["cancel-button"]}
          onClick={handleCancelClick}
        >
          Cancel
        </button>
        <button
          className={styles["upgrade-button"]}
          onClick={handleUpgradeClick}
        >
          Upgrade for $199
        </button>
      </div>
    </div>
  );
};

export default SeatClassSelector;
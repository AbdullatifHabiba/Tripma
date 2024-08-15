"use client";
import React, { useState, useEffect } from "react";
import styles from "./SeatClassSelector.module.css";
import Image from "next/image";
import ecoChair from "@/public/economyChairs.svg";
import businessChair from "@/public/businessChairs.svg";
import dot from "@/public/dot.svg";
import check from "@/public/check_green.svg";
import arrow from "@/public/right-arrow.svg";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SelectedDiv = ({ selected }) => (
  <div className={selected ? styles.selectbus : styles.selectecon}>
    selected
  </div>
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

const SeatClassSelector = ({
  selectedSeat,
  handleSeatSelection,
  CardInfo,
  setIsBusinessSelected,
}) => {
  console.log(CardInfo);

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

  const getLetterFromNumber = (number) =>
    String.fromCharCode("A".charCodeAt(0) + number - 1);

  const handleDepartingClick = () => setDeparting(true);
  const handleArrivingClick = () => setDeparting(false);
  const handleUpgradeClick = () => {
    setIsBusiness(true);
    setIsBusinessSelected(true);
    setAllowUpgrade(false);
    toast.success('Seat upgraded to Business class! 💵');
  };
  const handleCancelClick = () => {
    setAllowUpgrade(false);
    toast.info('Upgrade canceled.');
  };

  const updateSeatSelection = () => {
    if (!selectedSeat) {
      toast.error('Please select a seat 👁️‍🗨️');
      return;
    }
    if (departing) {
      setDepartingSeatSelected(true);
      setDeparting(false);
      toast.success('Departing seat selected!');
    } else {
      setArrivingSeatSelected(true);
      toast.success('Arriving seat selected!');
    }
    setIsBusinessSelected(false);
    setIsBusiness(false);

    handleSeatSelection();
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.header}>
        <div className={styles.flightInfoLeft}>
          <div className={styles.location}>
            <h4>{CardInfo.src}</h4>
            <span>California, US</span>
          </div>
          <Image src={arrow} alt="arrow" />
          <div className={styles.location}>
            <h4>{CardInfo.dest}</h4>
            <span>Tokyo, Japan</span>
          </div>
        </div>

        <div
          className={`${styles.flightDetails} ${
            departing ? styles.selected : ""
          }`}
          onClick={handleDepartingClick}
        >
          <span>
            {CardInfo.departing.date} | {CardInfo.departing.time}
          </span>
          <span style={{ fontSize: "small" }}>{CardInfo.departing.label}</span>
        </div>

        <div
          className={`${styles.flightDetails} ${
            !departing ? styles.selected : ""
          }`}
          onClick={handleArrivingClick}
        >
          <span>
            {CardInfo.arriving.date} | {CardInfo.arriving.time}
          </span>
          <span style={{ fontSize: "small" }}>{CardInfo.arriving.label}</span>
        </div>
      </div>

      <div className={styles.classes}>
        <div className={styles.class} onClick={() => {
          setIsBusiness(false);
          setIsBusinessSelected(false);
          toast.info('Selected Economy class.');
        }}>
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
              <Image src={dot} alt="dot" /> Built-in entertainment system
            </li>
            <li>
              <Image src={dot} alt="dot" /> Complimentary snacks and drinks
            </li>
            <li>
              <Image src={dot} alt="dot" /> One free carry-on and personal item
            </li>
          </ul>
        </div>
        <div className={styles.class} onClick={() => setAllowUpgrade(true)}>
          <Image src={businessChair} alt="Business class" />
          <h3>
            Business class {isBusiness && <SelectedDiv selected={isBusiness} />}
          </h3>
          <p>
            Rest and recharge during your flight with extended leg room,
            personalized service, and a multi-course meal service
          </p>
          <ul className={styles.inlineList}>
            <li>
              <Image src={check} alt="check" /> Extended leg room
            </li>
            <li>
              <Image src={check} alt="check" /> First two checked bags free
            </li>
            <li>
              <Image src={check} alt="check" /> Priority boarding
            </li>
            <li>
              <Image src={check} alt="check" /> Personalized service
            </li>
            <li>
              <Image src={check} alt="check" /> Enhanced food and drink service
            </li>
            <li>
              <Image src={check} alt="check" /> Seats that recline 40% more than
              economy
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.passengerInfo}>
          <div>
            <span>Passenger 1</span>
            <h4>{CardInfo.passangerName}</h4>
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
          <button className={styles.button} onClick={updateSeatSelection}>
            Save and close
          </button>
          {departingSeatSelected && !arrivingSeatSelected ? (
            <button
              className={`${styles.buttonPrimary} ${
                selectedSeat ? styles.selected : ""
              }`}
              onClick={() => {
                handleArrivingClick();
              }}
            >
              Next Flight
            </button>
          ) : (
            arrivingSeatSelected && (
              <Link
                className={`${styles.buttonPrimary} ${
                  selectedSeat ? styles.selected : ""
                }`}
                href={{
                  pathname: "/ui/flights/passanger/payment",
                  query: { bookingId: CardInfo.bookingId },
                }}
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
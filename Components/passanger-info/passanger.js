"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PassengerInformation.module.css";
import backpackIcon from "@/public/static/images/bag.svg";
import FlightSelectCard from "../flight-details/FlightCard";
import { flightDetailsData } from "@/Components/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PassengerInformation() {
    const router = useRouter();
  const [passengerInfo, setPassengerInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    redressNumber: "",
    knownTravellerNumber: "",
    emergencyContactSameAsPassenger: false,
    emergencyContactFirstName: "",
    emergencyContactLastName: "",
    emergencyContactEmail: "",
    emergencyContactPhone: "",
    checkedBags: 1,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPassengerInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const incrementBags = () => {
    setPassengerInfo((prev) => ({
      ...prev,
      checkedBags: prev.checkedBags + 1,
    }));
  };

  const decrementBags = () => {
    setPassengerInfo((prev) => ({
      ...prev,
      checkedBags: Math.max(0, prev.checkedBags - 1),
    }));
  };

  useEffect(() => {
    const validateForm = () => {
      const requiredFields = [
        "firstName",
        "lastName",
        "dateOfBirth",
        "email",
        "phone",
        "knownTravellerNumber",
        "emergencyContactFirstName",
        "emergencyContactLastName",
        "emergencyContactEmail",
        "emergencyContactPhone",
      ];

      for (let field of requiredFields) {
        if (!passengerInfo[field]) {
          return false;
        }
      }
      return true;
    };

    setIsFormValid(validateForm());
  }, [passengerInfo]);

  return (
    <div className={styles.container}>
     
      <div className={styles.formContainer}>
        <div className={styles.formSection}>
        <h1 className={styles.title}>Passenger Information</h1>
        <p className={styles.subtitle}>
        Enter the required information for each traveler and be sure that it exactly matches 
        the government-issued ID presented at the airport.
        </p>
          <form onSubmit={handleSubmit}>
          <h2 className={styles.sectionTitle}>Passenger1 (Adult)</h2>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={passengerInfo.firstName}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="First name*"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={passengerInfo.middleName}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Middle"
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={passengerInfo.lastName}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Last name*"
                  required
                />
              </div>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="suffix"
                  name="suffix"
                  value={passengerInfo.suffix}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Suffix"
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={passengerInfo.dateOfBirth}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Date of birth*"
                  required
                />
                <span>
                    <small>MM/DD/YY</small>
                </span>
              </div>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={passengerInfo.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Email address*"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={passengerInfo.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Phone number*"
                  required
                />
              </div>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="redressNumber"
                  name="redressNumber"
                  value={passengerInfo.redressNumber}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Redress number"
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="knownTravellerNumber"
                  name="knownTravellerNumber"
                  value={passengerInfo.knownTravellerNumber}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Known traveller number*"
                  required
                />
              </div>
            </div>

            <h2 className={styles.sectionTitle}>
              Emergency contact information
            </h2>
            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="emergencyContactSameAsPassenger"
                name="emergencyContactSameAsPassenger"
                checked={passengerInfo.emergencyContactSameAsPassenger}
                onChange={handleInputChange}
              />
              <label htmlFor="emergencyContactSameAsPassenger">
                Same as Passenger 1
              </label>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="emergencyContactFirstName"
                  name="emergencyContactFirstName"
                  value={passengerInfo.emergencyContactFirstName}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="first name*"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  id="emergencyContactLastName"
                  name="emergencyContactLastName"
                  value={passengerInfo.emergencyContactLastName}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="last name*"
                  required
                />
              </div>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  id="emergencyContactEmail"
                  name="emergencyContactEmail"
                  value={passengerInfo.emergencyContactEmail}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="email address*"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  id="emergencyContactPhone"
                  name="emergencyContactPhone"
                  value={passengerInfo.emergencyContactPhone}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="phone number*"
                  required
                />
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Bag information</h2>
            <p>
              Each passenger is allowed one free carry-on bag and one personal
              item. First checked bag for each passenger is also free. Second
              bag check fees are waived for loyalty program members. See the
              <Link style={{color:"blue"}} href={'/ui/policy'}> full bag policy</Link>.
            </p>

            <div className={styles.bagCounter}>
              <div className={styles.bagCounterCol1}>
                <span>Passenger 1</span>
                <span>
                  {" "}
                  {passengerInfo.firstName} {passengerInfo.lastName}
                </span>
              </div>
              <div className={styles.bagCounterCol1}>
                <span>Checked bags</span>
                <span className={styles.bagCounterButtons}>
                  <button type="button" onClick={decrementBags}>
                    -
                  </button>
                  <span>{passengerInfo.checkedBags}</span>
                  <button type="button" onClick={incrementBags}>
                    +
                  </button>
                </span>
              </div>
            </div>
            <div className={styles.formBtns}>
              <button className={styles.submitButton}>Save and close</button>
              <button
                type="submit"
                className={styles.selectSeat}
                disabled={!isFormValid}
                onClick={() => {
                 router.push("/ui/passanger/select-seat");
                }}
              >
                Select Seat
              </button>
            </div>
          </form>
        </div>

        <div className={styles.sideSection}>
          {/* Flight Summary */}
          <div className={styles.flightSummary}>
            <FlightSelectCard
              departingFlight={flightDetailsData[0]}
              returningFlight={flightDetailsData[1]}
              pass={false}
            />
            <button
              className={styles.selectSeat}
              disabled={!isFormValid}
              onClick={() => {
               router.push("/ui/passanger/select-seat");
              }}
            >
              Select Seat
            </button>
          </div>

          {/* Baggage Allowance */}
          <div className={styles.baggageInfo}>
            <div className={styles.baggageIcons}>
              <Image src={backpackIcon} alt="Backpack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

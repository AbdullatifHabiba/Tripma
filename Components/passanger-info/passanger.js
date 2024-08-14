"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PassengerInformation.module.css";
import backpackIcon from "@/public/bag.svg";
import FlightSelectCard from "../flight-details/FlightCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default  function PassengerInformation({ bookingId, flights }) {
  const departingFlight = flights.booking.departFlight;
  const returningFlight = flights.booking.arriveFlight;
  const router = useRouter();

  const [passengerInfo, setPassengerInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
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
  const [errors, setErrors] = useState({});

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

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^\d{11}$/;
    return phonePattern.test(phone);
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "dateOfBirth",
      "email",
      "phoneNumber",
      "knownTravellerNumber",
      "emergencyContactFirstName",
      "emergencyContactLastName",
      "emergencyContactEmail",
      "emergencyContactPhone",
    ];

    const newErrors = {};

    for (let field of requiredFields) {
      if (!passengerInfo[field]) {
        newErrors[field] = `${field} is required`;
      }
    }

    if (passengerInfo.email && !validateEmail(passengerInfo.email)) {
      newErrors.email = "Invalid email format";
    }
    if (passengerInfo.phone && !validatePhone(passengerInfo.phone)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }
    if (passengerInfo.emergencyContactEmail && !validateEmail(passengerInfo.emergencyContactEmail)) {
      newErrors.emergencyContactEmail = "Invalid email format";
    }
    if (passengerInfo.emergencyContactPhone && !validatePhone(passengerInfo.emergencyContactPhone)) {
      newErrors.emergencyContactPhone = "Invalid phone number format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [passengerInfo]);

  const createPassenger = async () => {
    try {
      toast.info("Adding Passengers, please wait...");

      const data = await fetch("/api/booking/passengers", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ passengers: [passengerInfo], bookingId: bookingId })
      });
      const response = await data.json();
      if (data.ok) {
        toast.success("Passenger created successfully!");
        return true;
      } else {
        toast.error(`Failed to create passenger.${response.error}`);
        return false;
      }
    } catch (error) {
      toast.error("An error occurred while creating the passenger.");
      return false;
    }
  }

  const handleSelectSeat = async () => {
    const success = await createPassenger();
    if (success) {
      setTimeout(() => {
      router.push(`/ui/flights/passanger/select-seat?bookingId=${bookingId}`);
      },1000);
    }
  }

  return (
    <div className={styles.container}>
      <ToastContainer />
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
                {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
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
                {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
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
                  type="date"
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
                {errors.dateOfBirth && <span className={styles.error}>{errors.dateOfBirth}</span>}
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
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={passengerInfo.phoneNumber}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Phone number*"
                  required
                />
                {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
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
                {errors.knownTravellerNumber && <span className={styles.error}>{errors.knownTravellerNumber}</span>}
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
                {errors.emergencyContactFirstName && <span className={styles.error}>{errors.emergencyContactFirstName}</span>}
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
                {errors.emergencyContactLastName && <span className={styles.error}>{errors.emergencyContactLastName}</span>}
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
                {errors.emergencyContactEmail && <span className={styles.error}>{errors.emergencyContactEmail}</span>}
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
                {errors.emergencyContactPhone && <span className={styles.error}>{errors.emergencyContactPhone}</span>}
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
                onClick={handleSelectSeat}
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
              departingFlight={departingFlight}
              returningFlight={returningFlight}
              pass={false}
            />
            <button
              className={styles.selectSeat}
              disabled={!isFormValid}
              onClick={handleSelectSeat}
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
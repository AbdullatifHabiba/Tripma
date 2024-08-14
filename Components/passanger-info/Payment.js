"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./PassengerInformation.module.css";
import FlightSelectCard from "../flight-details/FlightCard";
import { useRouter } from "next/navigation";
import google from "@/public/google.png";
import apple from "@/public/apple.png";
import facebook from "@/public/facebook.png";
import paypal from "@/public/paypal.svg";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Payment({ flights, bookingId }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationDate: "",
    ccv: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [sameBill, setSameBill] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    fetch("/api/booking/payment", {
      method: "POST",
      body: JSON.stringify({
        bookingId: Number( bookingId),
        paymentMethod: {
          name: formData.nameOnCard,
          cardNumber: formData.cardNumber,
          expiryDate: formData.expirationDate,
          ccv: Number(formData.ccv),
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong with payment");
      })
      .then((data) => {
        toast.success("Payment method checked successful!");
        router.push(`/ui/flights/flight-summary?bookingId=${bookingId}`);
      })
      .catch((error) => {
        toast.error("Payment failed. Please try again.");
        console.error(error);
      });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.nameOnCard) {
      newErrors.nameOnCard = "Name on card is required";
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!formData.expirationDate) {
      newErrors.expirationDate = "Expiration date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expirationDate)) {
      newErrors.expirationDate = "Expiration date must be in MM/YY format";
    }

    if (!formData.ccv) {
      newErrors.ccv = "CCV is required";
    } else if (!/^\d{3,4}$/.test(formData.ccv)) {
      newErrors.ccv = "CCV must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData, paymentMethod]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handlePayment();
    } else {
      toast.error("Form has errors. Please correct them.");
    }
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.formContainer}>
        <div className={styles.formSection}>
          <h2 className={styles.title}>Payment method</h2>
          <p className={styles.subtitle}>
            Select a payment method below. Tripma processes your payment
            securely with end-to-end encryption.
          </p>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="billSame"
              checked={sameBill}
              onChange={(e) => setSameBill(e.target.checked)}
            />
            <label htmlFor="billSame">
              Billing address is same as Passenger 1{" "}
            </label>
          </div>
          <div className={styles.paymentOptions}>
            <button
              className={`${styles.paymentButton} ${
                paymentMethod === "credit" ? styles.active : ""
              }`}
              onClick={() => handlePaymentMethodChange("credit")}
            >
              <span className={styles.icon}>💳</span> Credit card
            </button>
            <button
              className={`${styles.paymentButton} ${
                paymentMethod === "google" ? styles.active : ""
              }`}
              onClick={() => handlePaymentMethodChange("google")}
            >
              <span className={styles.icon}>
                <Image src={google} alt="Google" width={16} height={16} />
              </span>{" "}
              Google Pay
            </button>
            <button
              className={`${styles.paymentButton} ${
                paymentMethod === "apple" ? styles.active : ""
              }`}
              onClick={() => handlePaymentMethodChange("apple")}
            >
              <span className={styles.icon}>
                <Image src={apple} alt="Apple" width={16} height={16} />
              </span>{" "}
              Apple Pay
            </button>
            <button
              className={`${styles.paymentButton} ${
                paymentMethod === "paypal" ? styles.active : ""
              }`}
              onClick={() => handlePaymentMethodChange("paypal")}
            >
              <span className={styles.icon}>
                <Image src={paypal} alt="p" width={16} height={16} />
              </span>{" "}
              PayPal
            </button>
            <button
              className={`${styles.paymentButton} ${
                paymentMethod === "crypto" ? styles.active : ""
              }`}
              onClick={() => handlePaymentMethodChange("crypto")}
            >
              <span className={styles.icon}>₿</span> Crypto
            </button>
          </div>

          {paymentMethod === "credit" && (
            <div>
              <h2 className={styles.sectionTitle}>Credit card details</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on card"
                    className={styles.input}
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                  />
                  {errors.nameOnCard && (
                    <span className={styles.error}>{errors.nameOnCard}</span>
                  )}
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    className={styles.input}
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  {errors.cardNumber && (
                    <span className={styles.error}>{errors.cardNumber}</span>
                  )}
                </div>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="expirationDate"
                      placeholder="Expiration date"
                      className={styles.input}
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                    />
                    <span className={styles.inputHint}>MM/YY</span>
                    {errors.expirationDate && (
                      <span className={styles.error}>
                        {errors.expirationDate}
                      </span>
                    )}
                  </div>
                  <div className={styles.inputGroup}>
                    <div className={styles.rowIcon}>
                      <input
                        type="text"
                        name="ccv"
                        placeholder="CCV"
                        className={styles.input}
                        style={{ border: "none" }}
                        value={formData.ccv}
                        onChange={handleInputChange}
                      />
                      <span className={styles.infoIcon}>ℹ️</span>
                    </div>
                    {errors.ccv && (
                      <span className={styles.error}>{errors.ccv}</span>
                    )}
                  </div>
                </div>

                <h2 className={styles.sectionTitle}>Create an account</h2>
                <p className={styles.accountInfo}>
                  Tripma is free to use as a guest, but if you create an account
                  today, you can save and view flights, manage your trips, earn
                  rewards, and more.
                </p>

                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={formData.saveCard}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        saveCard: e.target.checked,
                      }))
                    }
                  />
                  <label htmlFor="saveCard">
                    Save card and create account for later
                  </label>
                </div>

                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address or phone number"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={styles.input}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <span className={styles.error}>{errors.password}</span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <p className={styles.orDivider}>or</p>
                  <button type="button" className={styles.socialButton}>
                    <Image
                      src={google}
                      alt="Google"
                      width={20}
                      height={20}
                      className={styles.socialIcon}
                    />{" "}
                    Sign up with Google
                  </button>
                  <button type="button" className={styles.socialButton}>
                    <Image
                      src={apple}
                      alt="Apple"
                      width={20}
                      height={20}
                      className={styles.socialIcon}
                    />{" "}
                    Continue with Apple
                  </button>
                  <button type="button" className={styles.socialButton}>
                    <Image
                      src={facebook}
                      alt="Facebook"
                      width={20}
                      height={20}
                      className={styles.socialIcon}
                    />{" "}
                    Continue with Facebook
                  </button>
                </div>
                <h2 className={styles.sectionTitle}>Cancellation policy</h2>
                <p className={styles.policyInfo}>
                  This flight has a flexible cancellation policy. If you cancel
                  or change your flight up to 30 days before the departure date,
                  you are eligible for a free refund. All flights booked on
                  Tripma are backed by our satisfaction guarantee, however
                  cancellation policies vary by airline. See the
                  <Link href="/cancellation-policy">
                    {" "}
                    full cancellation policy
                  </Link>{" "}
                  for this flight.
                </p>

                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={() => router.push(`/ui/flights/seat-select?bookingId=${bookingId}`)}
                  >
                    Back to seat select
                  </button>
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={styles.confirmButton}
                  >
                    Confirm and pay
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Add payment options UI for other methods here */}
        </div>

        <div className={styles.sideSection}>
          {/* Flight Summary */}
          <div className={styles.flightSummary}>
            <FlightSelectCard
              departingFlight={flights.booking.departFlight}
              returningFlight={flights.booking.arriveFlight}
              pass={false}
            />
            <button
              type="submit"
              disabled={!isFormValid}
              className={styles.confirmButton}
              onClick={handleSubmit}
            >
              Confirm and pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
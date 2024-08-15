'use client';
import React from "react";
import Image from "next/image";
import styles from "./BookingTrips.module.css";
import BookingDetailOverlay from "./BookingOverlay";
import { useState } from "react";

const BookingTrips = ({ bookings }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);
    const [isOverlayOpen, setOverlayOpen] = useState(false);
  
    const handleOpenOverlay = (booking) => {
      setSelectedBooking(booking);
      setOverlayOpen(true);
    };
  
    const handleCloseOverlay = () => {
      setOverlayOpen(false);
      setSelectedBooking(null);
    };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Bookings</h1>
      <div className={styles.bookingList}>
        {bookings.map((booking) => (
          <div key={booking.id} className={styles.bookingCard}
          onClick={() => handleOpenOverlay(booking)}
          >
            <h2 className={styles.bookingNumber}>Booking: {booking.bookingNumber}</h2>
            <div className={styles.flightDetails}>
              <div className={styles.flight}>
                <Image
                  src={booking.departFlight.logo}
                  alt={`${booking.departFlight.airline} logo`}
                  width={50}
                  height={50}
                />
                <div className={styles.flightInfo}>
                  <h3>{booking.departFlight.airline} - {booking.departFlight.flightNumber}</h3>
                  <p>From: {booking.departFlight.origin} To: {booking.departFlight.destination}</p>
                  <p>Departure: {new Date(booking.departFlight.departure).toLocaleString()}</p>
                  <p>Arrival: {new Date(booking.departFlight.arrival).toLocaleString()}</p>
                  <p>Stops: {booking.departFlight.stops} ({booking.departFlight.stopInfo})</p>
                  <p>Duration: {booking.departFlight.duration}</p>
                  <p>Price: ${booking.departFlight.price}</p>
                </div>
              </div>

              <div className={styles.flight}>
                <Image
                  src={booking.arriveFlight.logo}
                  alt={`${booking.arriveFlight.airline} logo`}
                  width={50}
                  height={50}
                />
                <div className={styles.flightInfo}>
                  <h3>{booking.arriveFlight.airline} - {booking.arriveFlight.flightNumber}</h3>
                  <p>From: {booking.arriveFlight.origin} To: {booking.arriveFlight.destination}</p>
                  <p>Departure: {new Date(booking.arriveFlight.departure).toLocaleString()}</p>
                  <p>Arrival: {new Date(booking.arriveFlight.arrival).toLocaleString()}</p>
                  <p>Stops: {booking.arriveFlight.stops} ({booking.arriveFlight.stopInfo})</p>
                  <p>Duration: {booking.arriveFlight.duration}</p>
                  <p>Price: ${booking.arriveFlight.price}</p>
                </div>
              </div>
            </div>

            <div className={styles.totalPrice}>
              <h3>Total Price: ${booking.totalPrice}</h3>
            </div>
          </div>
        ))}
      </div>
      <BookingDetailOverlay 
        open={isOverlayOpen} 
        handleClose={handleCloseOverlay} 
        booking={selectedBooking} 
      />
    </div>
  );
};

export default BookingTrips;

// Description: This file defines the select seat page for the passenger.
'use client';
import TrainSeats from '@/Components/selectSeat/selectSeat';
import SeatClassSelector from '@/Components/selectSeat/SeatClassSelector';
import Image from 'next/image';
import tripma from '@/public/tripma.svg';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatDateTime } from '@/utils/functions';


const SeatsPage = ({ searchParams }) => {

  const [selectedDepartSeat, setSelectedDepartSeat] = useState(null);
  const [selectedReturnSeat, setSelectedReturnSeat] = useState(null);
  const [isDeparting, setIsDeparting] = useState(true);
  const [isBusinessSelected, setIsBusinessSelected] = useState(false);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { bookingId } = searchParams;

   // get booking info
   const { data: bookingData, error: bookingError } = useSWR(`/api/booking/${bookingId}`, fetcher);

   const departFlightId = bookingData?.booking?.departFlightId;
   const returnFlightId = bookingData?.booking?.arriveFlightId;
 
   // get departflight seats
   const { data: departSeats, error: departError } = useSWR(
     departFlightId ? `/api/flights/${departFlightId}/seats` : null,
     fetcher
   );
 
   // get returnflight seats
   const { data: returnSeats, error: returnError } = useSWR(
     returnFlightId ? `/api/flights/${returnFlightId}/seats` : null,
     fetcher
   );
 
   if (bookingError || departError || returnError) return <div>failed to load</div>;
   if (!bookingData || !departSeats || !returnSeats) return <div>loading...</div>;


   function createCardInfo(flight, passenger, bookingId) {
    const departureTime = formatDateTime(flight.departure);
    const arrivalTime = formatDateTime(flight.arrival);
  
    return {
      departing: {
        date: departureTime.formattedDate,
        time: departureTime.formattedTime,
        label: "Departing"
      },
      arriving: {
        date: arrivalTime.formattedDate,
        time: arrivalTime.formattedTime,
        label: "Arriving"
      },
      passengerName: `${passenger.firstName} ${passenger.lastName}`,
      src: flight.origin,
      dest: flight.destination,
      bookingId: bookingId
    };
  }
  
  const passenger = bookingData.booking.passengers[0];
  const departFlight = bookingData.booking.departFlight;
  const arriveFlight = bookingData.booking.arriveFlight;
  
  const departCardInfo = createCardInfo(departFlight, passenger, bookingId);
  const returnCardInfo = createCardInfo(arriveFlight, passenger, bookingId);
  


  const handleSeatSelection = async () => {
    if (isDeparting) {
      setIsDeparting(false);
    } else {
      try {
        // Send request to the server to mark seats as unavailable
        await fetch('/api/booking/seats', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            departSeatId: selectedDepartSeat.id,
            returnSeatId: selectedReturnSeat.id,
            bookingId: Number(bookingId),
            departFlightId: departFlightId,
            returnFlightId: returnFlightId,
          }),
        });
        toast.success('Seats successfully locked!');
      } catch (error) {
        toast.error(`Failed to lock seats.${error}`);
        console.error('Failed to lock seats:', error);
      }
    }
  };

  return (
    <div>
      <Link href="/">
        <Image src={tripma} alt="tripma" />
      </Link>
      <div>
        {isDeparting ? (
          <TrainSeats
            setSelectedSeat={setSelectedDepartSeat}
            FlightSeats={departSeats.seats}
            isDeparting={true}
            isBusinessSelected={isBusinessSelected}
          />
        ) : (
          <TrainSeats
            setSelectedSeat={setSelectedReturnSeat}
            FlightSeats={returnSeats.seats}
            isDeparting={false}
            isBusinessSelected={isBusinessSelected}
          />
        )}
      </div>
      <div style={{ position: 'fixed', top: '0%', right: '0%' }}>
        <SeatClassSelector
          selectedSeat={isDeparting ? selectedDepartSeat : selectedReturnSeat}
          CardInfo={isDeparting ? departCardInfo : returnCardInfo}
          handleSeatSelection={handleSeatSelection}
          setIsBusinessSelected={setIsBusinessSelected}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default SeatsPage;
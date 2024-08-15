import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const BookingDetailOverlay = ({ open, handleClose, booking }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        maxHeight: '80vh',  // Set max height to 80% of the viewport height
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflowY: 'auto',  // Enable vertical scrolling
      }}>
        <Typography variant="h6" component="h2">
          Booking Details
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Booking Number: {booking?.bookingNumber}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Departure Flight: {booking?.departFlight?.origin} - {booking?.departFlight?.destination}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Arrival Flight: {booking?.arriveFlight?.origin} - {booking?.arriveFlight?.destination}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Total Price: ${booking?.totalPrice}
        </Typography>

        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          Passengers
        </Typography>
        {booking?.passengers?.map((passenger, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <Typography>
              Name: {passenger.firstName} {passenger.middleName} {passenger.lastName}
            </Typography>
            <Typography>Date of Birth: {new Date(passenger.dateOfBirth).toLocaleDateString()}</Typography>
            <Typography>Email: {passenger.email}</Typography>
            <Typography>Phone Number: {passenger.phoneNumber}</Typography>
            <Typography>Checked Bags: {passenger.checkedBags}</Typography>
          </Box>
        ))}

        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          Seats
        </Typography>
        {booking?.seats?.map((seat, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <Typography>
              Flight ID: {seat.flightId} - Row: {seat.row}, Col: {seat.col}, Class: {seat.class ? 'Business' : 'Economy'}
            </Typography>
          </Box>
        ))}

        <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
          Payment Method
        </Typography>
        <Typography>Name: {booking?.paymentMethod?.name}</Typography>
        <Typography>Card Number: **** **** **** {booking?.paymentMethod?.cardNumber.slice(-4)}</Typography>
        <Typography>Expiry Date: {booking?.paymentMethod?.expiryDate}</Typography>
      </Box>
    </Modal>
  );
};

export default BookingDetailOverlay;

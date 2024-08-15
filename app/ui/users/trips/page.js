"use client";
import React, { useState, useEffect } from "react";
import BookingTrips from "@/Components/trips/BookingTrips";
import { useSession } from "next-auth/react";
import useSWR, { mutate } from "swr";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Navbar from "@/Components/Navbar";

const BookingTripsPage = ({ searchParams }) => {
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.page) || 1
  );
  const bookingsPerPage = 5;

  const { data: session } = useSession();
  const userId = session?.user?.id;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const allBookings =
    useSWR(`/api/users/${userId}`, fetcher).data?.bookings || [];

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = allBookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );
  const totalPages = Math.ceil(allBookings.length / bookingsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  };

  useEffect(() => {
    if (userId) {
      mutate(`/api/users/${userId}`);
    }
  }, [currentPage, userId]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Navbar />

      <BookingTrips bookings={currentBookings} />
      <Stack spacing={2} mt={3} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default BookingTripsPage;
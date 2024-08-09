"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./FlightDetails.module.css";
import FlightSearch from "../searchBar/FlightSearch";
import Image from "next/image";
import map from "@/public/static/images/map.svg";
import PriceGrid from "./PriceGrid";
import PriceHistory from "./PriceHistory";
import PlacesComponent from "../flights/places";
import DealsComponent from "../flights/deals";
import {
  uniquePlaces,
  deals,
  GridData,
  priceHistoryData,
} from "@/Components/lib/data";
import { Footer1, Footer2 } from "../footer/footer";
import PriceRating from "./PriceRating";
import { FlightList, FilterOptions } from "./FlightList";
import FlightSelectCard from "./FlightCard";

const FlightDetails = () => {
  const [selectedDepartingFlight, setSelectedDepartingFlight] = useState(null);
  const [selectedReturningFlight, setSelectedReturningFlight] = useState(null);

  const handleFlightSelect = (flight) => {
    if (!selectedDepartingFlight) {
      setSelectedDepartingFlight(flight);
    } else {
      setSelectedReturningFlight(flight);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className={styles.content}>
        <FlightSearch width={850} />
        <FilterOptions />

        <div className={styles.flightDetails}>
          <div className={styles.leftColumn}>
            <FlightList onFlightSelect={handleFlightSelect}>
              <h3 style={{ fontWeight: "bold" }}>
                Choose a{" "}
                <span style={{ color: "#605DEC" }}>
                  {selectedDepartingFlight ? "returning" : "departing"}
                </span>{" "}
                flight
              </h3>
            </FlightList>
            <Image src={map} alt="map" />
          </div>

          <div className={styles.rightColumn}>
            {selectedDepartingFlight || selectedReturningFlight ? (
              <FlightSelectCard
                departingFlight={selectedDepartingFlight}
                returningFlight={selectedReturningFlight}
              />
            ) : (
              <>
                <PriceGrid data={GridData} />
                <PriceHistory data={priceHistoryData} />
                <PriceRating />
              </>
            )}
          </div>
        </div>
      </div>

      <PlacesComponent places={uniquePlaces} allowExplore={false}>
        <div style={{ fontWeight: "bold" }}>
          Find{" "}
          <Link href={"/ui/places"} style={{ color: "#605DEC" }}>
            places to stay{" "}
          </Link>
          in Japan
        </div>
      </PlacesComponent>
      <DealsComponent flights={deals.slice(0, 3)}>
        <div style={{ fontWeight: "bold" }}>
          People in
          <Link href={"/ui/places"} style={{ color: "#605DEC" }}>
            San Francisco{" "}
          </Link>
          also searched for{" "}
        </div>
      </DealsComponent>

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default FlightDetails;

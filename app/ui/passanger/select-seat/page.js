'use client';
import TrainSeats from '@/Components/selectSeat/selectSeat';
import SeatClassSelector from '@/Components/selectSeat/SeatClassSelector';
import Image from 'next/image';
import tripma from '@/public/tripma.svg';
import Link from 'next/link';
import { useState } from 'react';

const SeatsPage = () => {
  const [selectedSeat, setSelectedSeat] = useState(null); 

  return (
    <div >
      <Link href="/">
      <Image src={tripma} alt="tripma" />
      </Link>
      
      <div>
        <TrainSeats setSelectedSeat={setSelectedSeat} />
      </div>
        <div style={{ position: 'fixed', top: '0%', right: '0%' }}>
        <SeatClassSelector selectedSeat={selectedSeat} /> 
      </div>
    </div>
  );
};

export default SeatsPage;
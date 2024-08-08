import TrainSeats from '@/Components/selectSeat/selectSeat';
import SeatClassSelector from '@/Components/selectSeat/SeatClassSelector';
import Image from 'next/image';
import tripma from '@/public/tripma.svg';
import Link from 'next/link';

const SeatsPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Link href="/">
      <Image src={tripma} alt="tripma" />
      </Link>
      
      <div>
        <TrainSeats />
      </div>
        <div style={{ position: 'fixed', top: '0%', right: '0%' }}>
        <SeatClassSelector />
      </div>
    </div>
  );
};

export default SeatsPage;
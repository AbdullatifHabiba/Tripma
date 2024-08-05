import styles from './Styles.module.css';
import Image from 'next/image';
import depart from '../public/departure.png';
import arrival from '../public/arrival.png';
import calender from '../public/calendar.png';
import user from '../public/user.png';
const FlightSearch = () => {
  return (
    <div className={styles.flightSearch}>
      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
           <Image src={depart} alt="search"  />
          </div>
          <div className={styles.label}> 
          <input type="search" placeholder="From Where?" />   

          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={arrival} alt="search"  />
          </div>
          <div className={styles.label}>
            <input type="search" placeholder="To Where?" />   
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={calender} alt="calendar"  />
          </div>
          <div className={styles.label}>Depart-Return
            
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.textInput}>
        <div className={styles.base}>
          <div className={styles.icon}>
            <Image src={user}alt="user"  />
          </div>
          <div className={styles.label}>1 adult</div>
        </div>
      </div>

      <div className={styles.button}>
        <div className={styles.label}>Search</div>
      </div>
    </div>
  );
};

export default FlightSearch;

import styles from "./flights.module.css";
import Image from "next/image";
import ra from "../../public/right-arrow.svg";
import Link from "next/link";

const DealsComponent = ({ flights }) => {
  return (
    <div className={styles.CardRow}>
      <div className={styles.titleRow}>
        <div>Find your next adventure with these <Link href={"/ui/deals"} style={{ color: 'blue' }}>flight deals</Link></div>
        <button className={styles.arrow}>All
            <Image src={ra} alt = "right-arrow" />
        </button>
      </div>
      <div className={styles.cardLine}>
        {flights.map((flight, index) => (
          <div key={index} className={styles.card}
            style={{ width:flight.image.width }}
          >
            <div className={styles.cardImage}>
              <Image src={flight.image} alt={flight.city} />
            </div>
            <div className={styles.cardData}>
                <div className= {styles.name}>
                <h2 className={styles.city}>
                {flight.city}, <span style={{ color: 'blue' }}>{flight.place}</span>
              </h2>
              <span className={styles.price}>{flight.price}</span>

            </div>
              <div className={styles.description} >
              {flight.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsComponent;

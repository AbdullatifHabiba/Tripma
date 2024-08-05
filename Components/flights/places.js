import styles from "./flights.module.css";
import Image from "next/image";
import ra from "../../public/right-arrow.svg";
import Link from "next/link";

const PlacesComponent = ({ places }) => {
  return (
    <div className={styles.CardRow}>
      <div className={styles.titleRow}>
        <div >Explore Unique  <Link href={"/ui/places"}style={{ color: 'green' }}>Places to stay</Link></div>
        <button className={styles.arrow}>All
            <Image src={ra} alt = "right-arrow" />
        </button>
      </div>
      <div className={styles.cardLine}>
        {places.map((place, index) => (
          <div key={index} className={styles.card}
          
          style={{ width:place.image.width }}
>
            <div className={styles.cardImage}>
              <Image src={place.image} alt={place.city} />
            </div>
            <div className={styles.cardData}>
                <div className= {styles.name}>
                <h2 className={styles.city}>
                {place.city} <span style={{ color: 'green' }}>{place.place}</span>
              </h2>

            </div>
              <div className={styles.description} >
              {place.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.exploreButton}>
        <button>Explore More Stays</button>
      </div>
    </div>
  );
};

export default PlacesComponent;

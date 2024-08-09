import styles from "./flights.module.css";
import Image from "next/image";
import ra from "../../public/right-arrow.svg";
import Link from "next/link";

const PlacesComponent = ({ places, children ,allowExplore }) => {
  return (
    <div className={styles.CardRow}>
     
      <div className={styles.cardLine}>
      <div className={styles.titleRow}>
        {children}
        <button className={styles.arrow}>
          All
          <Image src={ra} alt="right-arrow" />
        </button>
      </div>
        {places.map((place, index) => (
          <div
            key={index}
            className={styles.card}
          >
            <div
              className={styles.cardImage}
              style={{
                backgroundImage: `url(${place.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* <Image src={place.image} alt={place.city} fill/> */}
            </div>
            <div className={styles.cardData}>
              <div className={styles.name}>
                <h2 className={styles.city}>
                  {place.city}{" "}
                  <span style={{ color: "green" }}>{place.place}</span>
                </h2>
              </div>
              <div className={styles.description}>{place.description}</div>
            </div>
          </div>
        ))}
      </div>
      {allowExplore && (
        <div className={styles.exploreButton}>
          <button>Explore More Stays</button>
        </div>
      )}
    </div>
  );
};

export default PlacesComponent;

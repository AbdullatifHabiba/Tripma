import styles from "./flights.module.css";
import Image from "next/image";
import ra from "../../public/right-arrow.svg";
import Link from "next/link";

const DealsComponent = ({ flights, children }) => {
  return (
    <div className={styles.CardRow}>
      <div className={styles.titleRow}>
        {children}
        <button className={styles.arrow}>
          All
          <Image src={ra} alt="right-arrow" />
        </button>
      </div>
      <div className={styles.cardLine}>
        {flights.map((flight, index) => (
          <div
            key={index}
            className={styles.card}
          >
            <div className={styles.cardImage}
             style={{
              backgroundImage: `url(${flight.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
             }}
            
            >
              {/* <Image src={flight.image} alt={flight.city} fill={true} /> */}
            </div>
            <div className={styles.cardData}>
              <div className={styles.name}>
                <h2 className={styles.city}>
                  {flight.city},{" "}
                  <span style={{ color: "#605DEC" }}>{flight.place}</span>
                </h2>
                <span className={styles.price}>{flight.price}</span>
              </div>
              <div className={styles.description}>{flight.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsComponent;


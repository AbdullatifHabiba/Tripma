import styles from "./FlightDetails.module.css";
import Link from "next/link";
const PriceRating = () => (
    <>
    <h3>
        Price rating
        <Link className={styles.buyButton} href={"/buy"}>
          Buy soon
        </Link>
      </h3>
    <div className={styles.priceRating}>
      
      <p className={styles.parag}>
        We recommend booking soon. The average cost of this flight is $750, but
        could rise 18% to $885 in two weeks.
      </p>
      <p  className={styles.parag} style={
        { color: "#A1B0CC"      }
      }>
        Tripta analyzes thousands of flights, prices, and trends to ensure you get
        the best deal.
      </p>
    </div>
    </>
  );


  export default PriceRating;
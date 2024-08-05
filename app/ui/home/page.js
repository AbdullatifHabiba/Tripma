import styles from "./Home.module.css";
import hero from "../../../public/Hero Text Gradient.png";
import Image from "next/image";
import FlightSearch from "@/Components/FlightSearch";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <Image src={hero} alt="its more than just trip"></Image>
      </div>
      <FlightSearch />
    </div>
  );
}

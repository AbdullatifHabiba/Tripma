import styles from "./Home.module.css";
import hero from "../../../public/Hero Text Gradient.png";
import Image from "next/image";
import FlightSearch from "@/Components/searchBar/FlightSearch";
import Background from "@/Components/Background";

export default function Home() {
  return (
    <Background>
      <div className={styles.main}>
        <div className={styles.hero}>
          <Image src={hero} alt="its more than just trip"></Image>
        </div>
        <FlightSearch 
          width={1200}
        />
      </div>
    </Background>
  );
}

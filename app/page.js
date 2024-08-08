import Home from "../Components/home/Home";
import CookiesCard from "../Components/cookie/cookies";
import Banar from "../Components/Banar";
import Navbar from "../Components/Navbar";

export default function Main() {
  return (
    <>
      <Banar />
      <Navbar />
      <Home />
      <CookiesCard />
    </>
  );
}

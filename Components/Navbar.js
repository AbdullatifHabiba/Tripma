import Link from "next/link";
import style from "./Styles.module.css";
export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link href="/ui/home">
          Trimpa
        </Link>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <Link href="/ui/flight">Flights</Link>
        </li>
        <li className={style.link}>
          <Link href="/ui/hotel">Hotels</Link>
        </li>
        <li className={style.link}>
          <Link href="/ui/package">Packages</Link>
        </li>
        <li className={style.link}>
          <Link href="/ui/sign">SignIn</Link>
        </li>
        <li className={`${style.signUp}`}>
        <Link href="/ui/sign">SignUp</Link>

        </li>
      </ul>
    </div>
  );
}

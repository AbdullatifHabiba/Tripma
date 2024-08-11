"use client";

import Link from "next/link";
import { useState } from "react";
import style from "./Styles.module.css";
import Image from "next/image";
import logo from "../public/tripma.svg";
import Sign from "@/app/ui/sign/page";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Navbar({ logined = false }) {
  const pathname = usePathname(); // Get the current path
  const [isVisible, setIsVisible] = useState(false); //popup sign up

  const isActive = (link) => {
    // Return true if the pathname starts with the link
    return pathname.startsWith(link);
  };

  const handleLinkClick = (link) => {
    if (link === "/ui/sign") {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Link href="/">
            <Image src={logo} alt="logo" onClick={() => handleLinkClick("/")} />
          </Link>
        </div>
        <ul className={style.links}>
          <li className={style.link}>
            <Link href="/ui/flights">
              <span
                className={`${style.link} ${isActive("/ui/flights") ? style.active : ""}`}
                onClick={() => handleLinkClick("/ui/flights")}
              >
                Flights
              </span>
            </Link>
          </li>
          <li className={style.link}>
            <Link href="/ui/hotels">
              <span
                className={`${style.link} ${isActive("/ui/hotels") ? style.active : ""}`}
                onClick={() => handleLinkClick("/ui/hotels")}
              >
                Hotels
              </span>
            </Link>
          </li>
          <li className={style.link}>
            <Link href="/ui/packages">
              <span
                className={`${style.link} ${isActive("/ui/packages") ? style.active : ""}`}
                onClick={() => handleLinkClick("/ui/packages")}
              >
                Packages
              </span>
            </Link>
          </li>

          {!logined ? (
            <>
              <li className={style.link}>
                <span
                  className={`${style.link} ${isActive("/ui/sign") ? style.active : ""}`}
                  onClick={() => handleLinkClick("/ui/sign")}
                >
                  SignIn
                </span>
              </li>
              <li className={style.link}>
                <span
                  className={`${style.signUp}`}
                  onClick={() => handleLinkClick("/ui/sign")}
                >
                  SignUp
                </span>
              </li>
            </>
          ) : (
            <li className={style.link}>
              <Link href="/ui/myTrips">
                <span
                  className={`${style.link} ${isActive("/ui/myTrips") ? style.active : ""}`}
                  onClick={() => handleLinkClick("/ui/myTrips")}
                >
                  My Trips
                </span>
              </Link>
            </li>
          )}
        </ul>
      </div>
      {isVisible && <Sign state={setIsVisible} />}
    </>
  );
}

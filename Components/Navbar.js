"use client";

import Link from "next/link";
import { useState } from "react";
import style from "./Styles.module.css";
import Image from "next/image";
import logo from "../public/tripma.svg";
import SignUp from "@/app/ui/auth/signup/page";
import SignIn from "@/app/ui/auth/signin/page";
import { usePathname } from "next/navigation"; // Import usePathname
import { signIn,signOut,useSession } from "next-auth/react";

import person from '@/public/user.png'

export default function Navbar({ logined = false }) {
  const pathname = usePathname(); // Get the current path
  const [isVisible, setIsVisible] = useState(false); //popup sign up,sign in
  const [allowSign,setAllowSign]=useState(false);
  const { data: session } = useSession(); // Get the session
  console.log("session ,",session);
  logined = session ? true : false;

  const isActive = (link) => {
    // Return true if the pathname starts with the link
    return pathname.startsWith(link);
  };

  const handleLinkClick = (link) => {
    if (link === "/ui/signup") {
      setIsVisible(true);
      setAllowSign(false);
    }
    if (link === "/ui/signin") {
      setAllowSign(true);
      setIsVisible(false);

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
                  onClick={() => handleLinkClick("/ui/signin")}
                >
                  SignIn
                </span>
              </li>
              <li className={style.link}>
                <span
                  className={`${style.signUp}`}
                  onClick={() => handleLinkClick("/ui/signup")}
                >
                  SignUp
                </span>
              </li>
            </>
          ) : (
            <>
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
         
            <li className={style.link}>
            <Image src={session.user.image?session.user.image:person} alt={session.user.email} width={48} height={48}
             onClick={() => signOut()} />
              <span style={{fontSize:"10px"}}>
                {session?.user.email}
              </span>
            </li>
            {/* <li className={style.link}>
              <span
                className={`${style.link}`}
                onClick={() => signOut()}
                >
                SignOut
              </span>
            </li> */}

                  </>
          )}
        </ul>
      </div>
      {isVisible && <SignUp state={setIsVisible} />}
      {allowSign && <SignIn state={setAllowSign} />}

    </>
  );
}

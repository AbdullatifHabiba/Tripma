"use client";
import { useState } from "react";
import styles from "./Sign.module.css";
import Image from "next/image";
import google from "../../../public/google.png";
import apple from "../../../public/apple mac.png";
import facebook from "../../../public/facebook.png";
import { useRouter } from "next/navigation";
import Home from "../home/page";

const Sign = ({state}) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const router = useRouter();

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
    state(false);
  };

  return (
    <>
      {isOverlayVisible && (
        <div className={styles.overlay} onClick={handleCloseOverlay}>
          <div
            className={styles["sign-up"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles["sign-up-header"]}>
              <div className={styles["cancel"]}>
                <h1 className={styles["sign-up-title"]}>Sign up for Tripma</h1>
                <button
                  className={styles["cancel-button"]}
                  onClick={handleCloseOverlay}
                >
                  ✖️
                </button>
              </div>

              <p className={styles["sign-up-description"]}>
                Tripma is totally free to use. Sign up using your email address
                or phone number below to get started.
              </p>
            </div>
            <div className={styles["text-input"]}>
              <label
                className={styles["text-input-label"]}
                htmlFor="emailOrPhone"
              >
                Email or phone number
              </label>
              <input
                className={styles["text-input-base"]}
                type="text"
                id="emailOrPhone"
              />
            </div>
            <div className={styles["text-input"]}>
              <label className={styles["text-input-label"]} htmlFor="password">
                Password
              </label>
              <input
                className={styles["text-input-base"]}
                type="password"
                id="password"
              />
            </div>
            <div className={`${styles["text-input-ckecks"]}}`}>
              <div className={`${styles["text-input"]} ${styles["checkbox"]}`}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>
              <div className={`${styles["text-input"]} ${styles["checkbox"]}`}>
                <input type="checkbox" id="alerts" />
                <label htmlFor="alerts">Send me the latest deal alerts</label>
              </div>
            </div>

            <button className={styles["button"]}>Create account</button>
            <div className={styles["frame-89"]}>
              <div className={styles["divider"]}></div>
              <span>or</span>
              <div className={styles["divider"]}></div>
            </div>
            <button className={styles["button-secondary"]}>
              <div className={styles["icon"]}>
                <Image src={google} alt="google" />
              </div>
              Continue with Google
            </button>
            <button className={styles["button-secondary"]}>
              <div className={styles["icon"]}>
                <Image src={apple} alt="apple" />
              </div>
              Continue with Apple
            </button>

            <button className={styles["button-secondary"]}>
              <div className={styles["icon"]}>
                <Image src={facebook} alt="facebook" />
              </div>
              Continue with Facebook
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default Sign;

"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "./Sign.module.css";
import Image from "next/image";
import google from "@/public/google.png";
import apple from "@/public/apple.png";
import facebook from "@/public/facebook.png";

const Sign = ({ state }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
    state(false);
  };

  const handleSignUp = async () => {
    // Handle email/password sign-up
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailOrPhone, password }),
    });

    if (res.ok) {
      // Sign up was successful, you might want to sign the user in immediately
      signIn("credentials", { redirect: false, email: emailOrPhone, password });
    } else {
      // Handle error (e.g., user already exists)
      console.error('Sign up failed');
    }
  };

  const handleSocialSignIn = (provider) => {
    signIn(provider);
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
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <button className={styles["button"]} onClick={handleSignUp}>
              Create account
            </button>
            <div className={styles["frame-89"]}>
              <div className={styles["divider"]}></div>
              <span>or</span>
              <div className={styles["divider"]}></div>
            </div>
            <button
              className={styles["button-secondary"]}
              onClick={() => handleSocialSignIn("google")}
            >
              <div className={styles["icon"]}>
                <Image src={google} alt="google" />
              </div>
              Continue with Google
            </button>
            <button
              className={styles["button-secondary"]}
              onClick={() => handleSocialSignIn("apple")}
            >
              <div className={styles["icon"]}>
                <Image src={apple} alt="apple" />
              </div>
              Continue with Apple
            </button>

            <button
              className={styles["button-secondary"]}
              onClick={() => handleSocialSignIn("facebook")}
            >
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

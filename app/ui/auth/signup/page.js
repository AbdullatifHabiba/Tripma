"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Sign.module.css";
import Image from "next/image";
import google from "@/public/google.png";
import apple from "@/public/apple.png";
import facebook from "@/public/facebook.png";

const SignUp = ({ state }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
    state(false);
  };

  const validateInputs = () => {
    if (!emailOrPhone) {
      toast.error("Email or phone number is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    if (!termsChecked) {
      toast.error("You must agree to the terms and conditions");
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateInputs()) return;

    // Handle email/password sign-up
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailOrPhone, password }),
    });
    const data = await res.json();

    if (res.ok) {
      // Sign up was successful, sign the user in immediately
      signIn("credentials", { redirect: true, email: emailOrPhone, password });
      toast.success('Sign up successful!');
    } else {
      console.error('Sign up failed');
      // toastify the returned message
      toast.error(data.message);
    }
  };

  const handleSocialSignIn = (provider) => {
    signIn(provider);
  };

  return (
    <>
      <ToastContainer />
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
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={termsChecked}
                  onChange={(e) => setTermsChecked(e.target.checked)}
                />
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

export default SignUp;
'use client';
import styles from "./explore.module.css";
import { useState } from "react";

export default function ShareTravel() {
  const [emailInputs, setEmailInputs] = useState([""]);

  const addEmailInput = () => {
    setEmailInputs([...emailInputs, ""]);
  };

  return (
  
      <div className={styles.shareTravel}>
        {emailInputs.map((email, index) => (
          <input
            key={index}
            type="email"
            name={`email-${index}`}
            placeholder="Email address"
            className={styles.input}
            value={email}
            onChange={(e) => {
              const newEmails = [...emailInputs];
              newEmails[index] = e.target.value;
              setEmailInputs(newEmails);
            }}
          />
        ))}
        <div className={styles.buttons}>  
        <button className={styles.shareButton}>Email itinerary</button>
        <button className={styles.addButton} onClick={addEmailInput}>
          Add another
        </button>
        </div>
      </div>
  );
}

import React from "react";
import styles from "../styles/SignIn.module.css";

const SignIn: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <form className={styles.form}>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;

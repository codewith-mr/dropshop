// pages/login.js
import { useState } from "react";
import styles from "../Login/Login.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Show the login form with a fade-in effect
  useState(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Logging in with:", { email, password });
    setError("");
  };

  return (
    <div className={`${styles.container} ${isVisible ? styles.fadeIn : ""}`}>
      <h1>Login</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className={`${styles.input}`}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={`${styles.button}`} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

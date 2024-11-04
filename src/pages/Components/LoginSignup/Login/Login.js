import React, { useState } from "react";
import styles from "../Login/Login.module.css";
import { loginData } from "@/Utils/Mock/LoginSignupData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext"; // Import the useAuth hook

const Login = () => {
  const [mode, setMode] = useState(false);
  const { login, isLoggedIn } = useAuth(); // Use auth context to get login function and isLoggedIn status

  const toggleIcon = () => {
    setMode((prev) => !prev);
  };

  const handleLogin = () => {
    // Add your validation logic here
    const isValid = true; // Mock validation result
    if (isValid) {
      login(); // Call login function from context
      toast.success("Login successful!");
    } else {
      toast.error("Invalid email address");
    }
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div>
          <h3>Welcome Back!</h3>
          <h6>Please enter login details below</h6>
          {loginData.map((item, index) => (
            <span key={index}>
              <label>{item.Name}</label>
              {index === 1 ? (
                <div>
                  <input type={mode ? item.txtType : item.type} />
                  <FontAwesomeIcon
                    onClick={toggleIcon}
                    icon={mode ? faEye : faEyeSlash}
                  />
                </div>
              ) : (
                <input type={item.type} />
              )}
            </span>
          ))}
          <span className={styles.forgot}>
            <p>Forgot password?</p>
          </span>
          <div>
            <button onClick={handleLogin}>Login</button>
            <ToastContainer />
          </div>
          {isLoggedIn && <p>You're already logged in!</p>}
        </div>
      </div>
    </>
  );
};

export default Login;

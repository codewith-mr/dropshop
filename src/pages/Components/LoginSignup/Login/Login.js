import React, { useState } from "react";
import styles from "../Login/Login.module.css";
import { loginData } from "@/Utils/Mock/LoginSignupData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [mode, setMode] = useState(null);

  const toggleIcon = () => {
    setMode((prev) => !prev);
  };

  const notify = () => toast.error("Invald email adress");

  return (
    <>
      <div className={`${styles.loginContainer}`}>
        <div>
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
          <span className={`${styles.forgot}`}>
            <p>forgot password?</p>
          </span>
          <div>
            <button onClick={notify}>Login</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

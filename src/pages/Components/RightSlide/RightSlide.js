import React, { useState } from "react";
import Link from "next/link";
import styles from "../RightSlide/RightSlide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faHeart,
  faMoon,
  faSun,
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

const RightSlide = () => {
  const [mode, setMode] = useState(null);
  const [chevron, setChevron] = useState(null);
  const [showProfileOption, setShowProfileOption] = useState(false);

  const showOptions = () => {
    setShowProfileOption((prev) => !prev);
  };
  const toggleButton = () => {
    setMode((prev) => !prev);
  };
  const toggleButtonChevron = () => {
    setChevron((prev) => !prev);
  };

  return (
    <>
      <div className={`${styles.rightslider}`}>
        <div className={`${styles.profileAndIcons}`}>
          <FontAwesomeIcon
            onClick={toggleButton}
            icon={mode ? faMoon : faSun}
            size="lg"
          />
          <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
          <FontAwesomeIcon icon={faHeart} size="lg" />
          <div onClick={showOptions}>
            <img src="default profile.jpg" />
          </div>

          {showProfileOption && (
            <span>
              <button>Profile</button>
              <button>Login/Signup</button>
              <Link
                className={`${styles.link}`}
                href="/Components/CreatePost/CreatePost"
                passHref
              >
                <button>Create Post</button>
              </Link>
            </span>
          )}
        </div>
        <div className={`${styles.cart}`}>
          <div>
            <h1>LOGO HERE</h1>
          </div>
        </div>
        <div className={`${styles.cartList}`}>
          <p>Cart Items</p>
          <FontAwesomeIcon
            onClick={toggleButtonChevron}
            icon={chevron ? faChevronCircleUp : faChevronCircleDown}
          />
        </div>
      </div>
    </>
  );
};

export default RightSlide;

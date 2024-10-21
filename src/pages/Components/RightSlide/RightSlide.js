import React from "react";
import styles from "../RightSlide/RightSlide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHeart } from "@fortawesome/free-solid-svg-icons";

const RightSlide = () => {
  return (
    <>
      <div className={`${styles.rightslider}`}>
        <div className={`${styles.profileAndIcons}`}>
          <FontAwesomeIcon icon={faCartArrowDown} size="xl" />
          <FontAwesomeIcon icon={faHeart} size="xl" />
          <div></div>
        </div>
      </div>
    </>
  );
};

export default RightSlide;

import React from "react";
import styles from "../LeftSlide/LeftSlide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { leftSlideIcon } from "@/Utils/Mock/HomeUiData";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Slide = () => {
  return (
    <>
      <div className={`${styles.leftslider}`}>
        <div className={`${styles.logo}`}></div>

        <div className={`${styles.icon}`}>
          {leftSlideIcon.map((item, index) => (
            <span key={index}>
              <FontAwesomeIcon icon={item.icon} size="xl" />
            </span>
          ))}
        </div>

        <div className={`${styles.logout}`}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
        </div>
      </div>
    </>
  );
};

export default Slide;

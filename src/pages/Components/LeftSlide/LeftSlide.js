import React, { useState } from "react";
import styles from "../LeftSlide/LeftSlide.module.css";
import { leftSlideIcon } from "@/Utils/Mock/HomeUiData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const changeClass = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className={`${styles.leftslider}`}>
        <div className={`${styles.logo}`}>
          <img src="logo.jpg" />
        </div>

        <div className={`${styles.icon}`}>
          {leftSlideIcon.map((item, index) => (
            <span
              onClick={() => changeClass(index)}
              className={activeIndex === index ? styles.active : ""}
              key={index}
            >
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

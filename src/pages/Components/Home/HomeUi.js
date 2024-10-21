import React from "react";
import styles from "../Home/HomeUi.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HomeUi = () => {
  return (
    <>
      <div className={`container ${styles.mainContainer}`}>
        <div className={`${styles.searchInputBox}`}>
          <div>
            <input type="search" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeUi;

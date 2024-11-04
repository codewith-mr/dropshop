import React, { useState, useEffect } from "react";
import styles from "../Home/HomeUi.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronCircleDown,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import { HomeUiKeywords } from "@/Utils/Mock/HomeUiData";
import Product from "./Product/Product";

const shuffleArray = (array) => {
  return array
    .map((item) => ({ ...item, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map((item) => ({ keyword: item.keyword }));
};

const HomeUi = () => {
  const [mode, setmode] = useState(false);
  const [randomKeywords, setRandomKeywords] = useState([]);

  useEffect(() => {
    const shuffledKeywords = shuffleArray(HomeUiKeywords);
    setRandomKeywords(shuffledKeywords);
  }, []);

  const toggleIcon = () => {
    setmode((prev) => !prev);
  };

  const visibleKeywords = mode ? randomKeywords : randomKeywords.slice(0, 12);

  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className={`${styles.searchInputBox}`}>
        <div>
          <input type="search" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </div>
      </div>
      <div className={`${styles.sliderContainer}`}>
        <div>
          <Carousel fade>
            <Carousel.Item interval={4000}>
              <img
                className={`${styles.img1}`}
                src="/img.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Men's Fashion</h3>
                <p>High Quality Dress for men</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className={`${styles.img2}`}
                src="/img2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Branded shose</h3>
                <p>Shose in Pure Quality</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className={`${styles.img3}`}
                src="/img3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>30% OFF on Watch's</h3>
                <p>Premium Watch's with special discount</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div>
          <img className={`${styles.img}`} src="/sales img2.jpg" alt="Sale" />
        </div>
      </div>
      <div className={`${styles.keywords}`}>
        <div>
          {visibleKeywords.map((item, index) => (
            <span key={index}>{item.keyword}</span>
          ))}
        </div>
        <FontAwesomeIcon
          icon={mode ? faChevronCircleUp : faChevronCircleDown}
          size="lg"
          onClick={toggleIcon}
        />
      </div>
      <Product />
    </div>
  );
};

export default HomeUi;

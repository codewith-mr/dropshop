import React, { useState, useContext } from "react";
import { ProductContext } from "../../Components/context/ProductContext";
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
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const RightSlide = () => {
  const [mode, setMode] = useState(null);
  const [chevron, setChevron] = useState(null);
  const [showProfileOption, setShowProfileOption] = useState(false);
  const { cart, removeFromCart } = useContext(ProductContext);

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
              <Link
                className={`${styles.buttonLink}`}
                href="/Components/LoginSignup/Login/Login"
              >
                <button>Login/Signup</button>
              </Link>
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
        {chevron && cart.length > 0
          ? cart.map((product, index) => (
              <div key={index} className={`${styles.cartItems}`}>
                <div>
                  <div>
                    <img src={product.image} alt={product.Title} />
                  </div>
                  <div>
                    <h6>{product.Title}</h6>
                    <p>{product.Description}</p>
                  </div>
                  <div>
                    <p>
                      <span>Rs.</span>
                      {product.Price}
                    </p>
                  </div>
                  <span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      size="md"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </span>
                </div>
              </div>
            ))
          : cart.slice(0, 3).map((product, index) => (
              <div key={index} className={`${styles.cartItems}`}>
                <div>
                  <div>
                    <img src={product.image} alt={product.Title} />
                  </div>
                  <div>
                    <h6>{product.Title}</h6>
                    <p>{product.Description}</p>
                  </div>
                  <div>
                    <p>
                      <span>Rs.</span>
                      {product.Price}
                    </p>
                  </div>
                  <span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      size="md"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </span>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default RightSlide;

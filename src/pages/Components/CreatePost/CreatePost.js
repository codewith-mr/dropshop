// components/CreatePost.js
import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import styles from "../CreatePost/CreatePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { createPostData } from "@/Utils/Mock/CreatePostData";
import { ProductContext } from "../context/ProductContext";

const CreatePost = () => {
  const [chooseFile, setChooseFile] = useState(null);
  const [formData, setFormData] = useState({
    price: "",
    Description: "",
    image: null,
  });
  const fileRef = useRef(null);
  const { addProduct } = useContext(ProductContext);
  const router = useRouter();

  const fileSelector = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setChooseFile(selectedFile ? URL.createObjectURL(selectedFile) : null);
    setFormData((prevData) => ({
      ...prevData,
      image: selectedFile ? URL.createObjectURL(selectedFile) : null,
    }));
  };

  const handleInputChange = (e, labelName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [labelName]: value,
    }));
  };

  const handleCreateClick = () => {
    if (chooseFile && formData) {
      addProduct(formData);
      router.push("/");
    } else {
      alert("Please fill all inputs and select an image.");
    }
  };

  return (
    <div className={`${styles.createPost}`}>
      <div>
        <div onClick={fileSelector}>
          <input
            ref={fileRef}
            type="file"
            accept=".jpg,.png"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          {chooseFile ? (
            <img
              src={chooseFile}
              alt="Selected"
              style={{ width: "auto", height: "100%", maxHeight: "500px" }}
            />
          ) : (
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          )}
        </div>

        <div>
          {createPostData.map((item, index) => (
            <span key={index}>
              <label>{item.labelName}</label>
              {index === 1 ? (
                <textarea
                  onChange={(e) => handleInputChange(e, item.labelName)}
                />
              ) : (
                <input
                  type={item.type}
                  onChange={(e) => handleInputChange(e, item.labelName)}
                />
              )}
            </span>
          ))}

          <button onClick={handleCreateClick}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

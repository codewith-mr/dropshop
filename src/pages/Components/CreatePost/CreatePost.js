import React, { useState, useRef } from "react";
import styles from "../CreatePost/CreatePost.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { createPostData } from "@/Utils/Mock/CreatePost";

const CreatePost = () => {
  const [chooseFile, setChooseFile] = useState(null);
  const fileRef = useRef(null);

  const fileSelector = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setChooseFile(selectedFile);
  };
  return (
    <>
      <div className={`${styles.createPost}`}>
        <div>
          <div onClick={fileSelector}>
            <input
              ref={fileRef}
              type="file"
              accept=".jpg,.png"
              onChange={handleFileChange}
            />
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </div>
          <div>
            {createPostData.map((item, index) => (
              <span key={index}>
                <label>{item.labelName}</label>
                {index === 1 ? (
                  <textarea
                    style={{
                      height: "200px",
                      maxHeight: "200px",
                      textWrap: "wrap",
                    }}
                  />
                ) : (
                  <input type={item.type} />
                )}
              </span>
            ))}

            <button>Ceate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;

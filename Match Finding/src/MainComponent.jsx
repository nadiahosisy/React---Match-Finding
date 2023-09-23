import React from "react";
import { useState } from "react";

const MainComponent = () => {
  const [randomText, setRandomText] = useState("This is a cat");
  const [randomImage, setRandomImage] = useState("dog.jpg");
  const objects = [
    {
      "lion.jpg": "This is a lion",
    },
    {
      "cat.jpg": "This is a cat",
    },
    {
      "dog.jpg": "This is a dog",
    },
  ];

  const textArray = ["This is a cat", "This is a dog", "This is a lion"];
  const arrayImages = ["lion.jpg", "cat.jpg", "dog.jpg"];

  const generateRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textArray.length);
    const selectedText = textArray[randomIndex];
    setRandomText(selectedText);
  };
  const generateRandomImage = () => {
    const randomImage = Math.floor(Math.random() * arrayImages.length);
    const selectedImage = textArray[randomImage];
    setRandomImage(selectedImage);
  };

  return (
    <div>
      <div className="top-main">
        <div className="like-container">
          <img
            className="like-img"
            src="../public/images/like.png"
            alt="Like"
          ></img>
          <span>counter</span>
        </div>
        <div className="dislike-container">
          <img
            className="dislike-img"
            src="../public/images/dislike.png"
            alt="Dislike"
          ></img>
          <span>counter</span>
        </div>
      </div>
      <div className="middle-main">
        <img className="lion" src={randomImage} alt="Your Image"></img>
        <p>{randomText}</p>
      </div>
      <div className="bottom-main">
        <button onClick={generateRandomText}>positive</button>
        <button onClick={generateRandomImage}>negative</button>
      </div>
    </div>
  );
};

export default MainComponent;

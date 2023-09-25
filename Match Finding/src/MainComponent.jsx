import React from "react";
import { useState, useEffect } from "react";

const MainComponent = () => {
  const [randomText, setRandomText] = useState("This is a cat");
  const [randomImage, setRandomImage] = useState("dog.jpg");
  const [countPos, setCountPos] = useState(0);
  const [countNeg, setCountNeg] = useState(0);
  const [gameCount, setGameCount] = useState(0);

  const objects = [
    {
      image: "lion.jpg",
      text: "This is a lion",
    },
    {
      image: "cat.jpg",
      text: "This is a cat",
    },
    {
      image: "dog.jpg",
      text: "This is a dog",
    },
    {
      image: "panda.jpg",
      text: "This is a panda",
    },
    {
      image: "zebra.jpg",
      text: "This is a zebra",
    },
    {
      image: "fox.jpg",
      text: "This is a fox",
    },
    {
      image: "pig.jpg",
      text: "This is a pig",
    },
  ];

  const textArray = [
    "This is a cat",
    "This is a dog",
    "This is a lion",
    "This is a panda",
    "This is a zebra",
    "This is a fox",
    "This is a pig",
  ];
  const arrayImages = [
    "lion.jpg",
    "cat.jpg",
    "dog.jpg",
    "panda.jpg",
    "zebra.jpg",
    "fox.jpg",
    "pig.jpg",
  ];

  useEffect(() => {
    if (gameCount === 10) {
      alert("Game count reached 10!");
    }
  }, [gameCount]);

  useEffect(() => {
    setGameCount((gameCount) => gameCount + 1);
  }, [generateRandomText]);

  const generateRandom = (isTrueOrNot) => {
    const tempObj = objects.find((obj) => obj.image === randomImage);

    if (isTrueOrNot) {
      if (tempObj.text === randomText) {
        setCountPos(countPos + 1);
      } else {
        setCountNeg(countNeg + 1);
      }
    } else {
      if (tempObj.text !== randomText) {
        setCountPos(countPos + 1);
      } else {
        setCountNeg(countNeg + 1);
      }
    }

    // comment
    const randomIndex = Math.floor(Math.random() * textArray.length);
    const selectedText = textArray[randomIndex];
    setRandomText(selectedText);
    const randomImage2 = Math.floor(Math.random() * arrayImages.length);
    const selectedImage = arrayImages[randomImage2];
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
          <span className="posCount">{countPos}</span>
        </div>
        <div className="dislike-container">
          <img
            className="dislike-img"
            src="../public/images/dislike.png"
            alt="Dislike"
          ></img>
          <span className="negCount">{countNeg}</span>
        </div>
      </div>
      <div className="middle-main">
        <img
          className="image"
          src={`../public/images/${randomImage}`}
          alt="Random Image"
        />
        <p className="random-text">{randomText}</p>
      </div>
      <div className="bottom-main">
        <button className="true-btn" onClick={() => generateRandom(true)}>
          True
        </button>
        <button className="not-true-btn" onClick={() => generateRandom(false)}>
          Not True
        </button>
      </div>
    </div>
  );
};

export default MainComponent;

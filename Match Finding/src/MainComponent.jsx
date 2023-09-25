import React from "react";
import { useState, useEffect } from "react";

const MainComponent = () => {
  const [randomText, setRandomText] = useState("This is a cat");
  const [randomImage, setRandomImage] = useState("dog.jpg");
  const [countPos, setCountPos] = useState(0);
  const [countNeg, setCountNeg] = useState(0);
  const [gameCount, setGameCount] = useState(0);
  const [showReplacement, setShowReplacement] = useState(false);
  const [afterGame, setAfterGameText] = useState("");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  useEffect(() => {
    if (gameCount === 10) {
      const timeoutId = setTimeout(() => {
        if (countPos > countNeg) {
          setAfterGameText(afterGameText[0]);
        } else if (countPos < countNeg) {
          setAfterGameText(afterGameText[2]);
        } else {
          setAfterGameText(afterGame[1]);
        }

        setButtonsDisabled(true);

        setShowReplacement(true);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [gameCount]);

  const generateRandom = (isTrueOrNot) => {
    setGameCount(gameCount + 1);

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

  const refreshPage = () => {
    window.location.reload();
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
        {showReplacement ? (
          <>
            <p className="replacement-text">{afterGame}</p>
            <button className="reset-btn" onClick={refreshPage}>
              Reset
            </button>
          </>
        ) : (
          <>
            <img
              className="image"
              src={`../public/images/${randomImage}`}
              alt="Random Image"
            />
            <p className="random-text">{randomText}</p>
          </>
        )}
      </div>
      {gameCount < 10 && (
        <div className="bottom-main">
          <button
            className="true-btn"
            onClick={() => generateRandom(true)}
            disabled={buttonsDisabled}
          >
            True
          </button>
          <button
            className="not-true-btn"
            onClick={() => generateRandom(false)}
            disabled={buttonsDisabled}
          >
            Not True
          </button>
        </div>
      )}
    </div>
  );
};

export default MainComponent;

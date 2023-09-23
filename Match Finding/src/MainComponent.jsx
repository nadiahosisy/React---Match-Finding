import React from "react";

const MainComponent = () => {
  const objects = [
    {
      lion: "This is a lion",
    },
    {
      cat: "This is a cat",
    },
  ];
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
        <img
          className="lion"
          src="../public/images/lion.jpg"
          alt="Your Image"
        ></img>
        <p>ygiuiuiuh</p>
      </div>
      <div className="bottom-main">
        <button>positive</button>
        <button>negative</button>
      </div>
    </div>
  );
};

export default MainComponent;

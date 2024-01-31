import React from "react";
import { GiShare } from "react-icons/gi";

const CarouselBox = ({ handleProfileClick, people, activeIndex }) => {
  const person = people[activeIndex];
  return (
    <div className="image-bx-cont">
      <div className="share-bx flex">
        <GiShare />
      </div>
      <div className="indicator-bx">
        {people?.map((person, index) =>
          activeIndex === index ? (
            <div className="ind-con actvv"></div>
          ) : (
            <div className="ind-con"></div>
          )
        )}
      </div>

      <>
        <div className="flex all-ma-box">
          <img src={person?.image} alt="" />
          {/* <img src="images/pic2.png" alt="" /> */}
        </div>
        <div className="prof-bx-connect">
          <img src="images/pic1.png" alt="" onClick={handleProfileClick} />
          <div className="user-nmm">{person?.name}</div>
          <div className="username-txtt">@{person?.username}</div>
          <div className="username-txtt">{person?.location}</div>
          <div className="username-txtt biiio">
            {person?.bio ? person?.bio : "No Bio Yet"}
          </div>
        </div>
      </>
      <div className="chat-stick-btn-bx flex">
        <button className="ch-st-btn ora-btn">Chat</button>
        <button className="ch-st-btn">Stick</button>
      </div>
    </div>
  );
};

export default CarouselBox;

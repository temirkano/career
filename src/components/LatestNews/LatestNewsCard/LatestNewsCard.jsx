import React from "react";
import scss from "./LatestNewsCard.module.scss";

const LatestNewsCard = ({ handleChangeImg , item }) => {
  return (
    <>
      <div className={scss.picture}>
        <div className={scss.pictureSize}>
          <img src={item.image} alt="image" onClick={() => handleChangeImg(img)} />
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      </div>
    </>
  );
};

export default LatestNewsCard;

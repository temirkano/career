import React from "react";
import scss from "./LatestNewsCard.module.scss";

const LatestNewsCard = ({ id, image, title, desc }) => {
  return (
    <> 
      <div className={scss.picture}>
        <div className={scss.pictureSize}>
          <img src={image} alt="image"  />
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default LatestNewsCard;

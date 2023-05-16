import React from "react";
import scss from "./LatestNewsCard.module.scss";

const LatestNewsCard = ({ img, handleChangeImg }) => {
  return (
    <>
      <div className={scss.picture}>
        <div className={scss.pictureSize}>
          <img src={img} alt="image" onClick={() => handleChangeImg(img)} />
        </div>
      </div>
    </>
  );
};

export default LatestNewsCard;

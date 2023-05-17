import React, { useMemo, useState } from "react";
import { LatestNewsImg, LatestNewsImg1 } from "../../const/LatestNewsImg";
import LatestNewsCard from "../LatestNews/LatestNewsCard/LatestNewsCard";
import scss from "./LatestNews.module.scss";
import city1 from "../../assets/LatestNewsImg/Ratio1.svg";
import city2 from "../../assets/LatestNewsImg/Ratio2.svg";
import city3 from "../../assets/LatestNewsImg/Ratio3.svg";
import city4 from "../../assets/LatestNewsImg/Ratio4.svg";
import city0 from "../../assets/LatestNewsImg/Ratio.svg";

function LatestNews() {
  const [img, setImg] = useState(city0);

  // function clickOne() {
  //   setImg(city1);
  // }
  // function clickSecond() {
  //   setImg(city2);
  // }
  // function clickThird() {
  //   setImg(city3);
  // }
  // function clickFourth() {
  //   setImg(city4);
  // }

  const render = useMemo(()=>
    LatestNewsImg.map((el) => {
      return <LatestNewsCard  key={el.id} {...el} />
    })
  )
  console.log(render);
  return (
    <div className={scss.container}>
      <div className="">
        {render.slice(0,1)}
      </div>
      <div className={scss.right}>
        {render.slice(1,5)}
      </div>
    </div>
  );
}

export default LatestNews;

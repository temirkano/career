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

  function clickOne() {
    setImg(city1);
  }
  function clickSecond() {
    setImg(city2);
  }
  function clickThird() {
    setImg(city3);
  }
  function clickFourth() {
    setImg(city4);
  }

  return (
    <div className={scss.container}>
      <div className={scss.latestNews}>
        <div className={scss.latestNewsLeft}>
          <img src={img} alt="image" />
          <div className={scss.latestNewsLeftText}>
            <div className={scss.newsTextLeft}>
              <span>24 May 2019</span>
              <div className={scss.ul}></div>
              <span>8 mins</span>
            </div>
            <h1>Event On A Budget: 7 Tips From The Great Depression</h1>
            <p>
              Aenean viverra rhoncus pede. Phasellus blandit leo ut odio.
              Pellentesque commodo eros a enim. Phasellus consectetuer
              vestibulum elit.
            </p>
          </div>
        </div>
        <div className={scss.latestNewsRight}>
          <div className={scss.newsCards}>
            <div className={scss.newsCard}>
              <img className={scss.image} src={city1} alt="img" onClick={clickOne} />
              <div className={scss.textNews}>
              <div className={scss.newsText}>
                <span>24 May 2019</span>
                <div className={scss.ul}></div>
                <span>8 mins</span>
              </div>
              <h2>Apply These 7 Secret Techniques To Improve Event</h2>
              </div>
            </div>
            <div className={scss.newsCard}>
              <img className={scss.image} src={city3} alt="img" onClick={clickThird} />
              <div className={scss.textNews}>
              <div className={scss.newsText}>
                <span>24 May 2019</span>
                <div className={scss.ul}></div>
                <span>8 mins</span>
              </div>
              <h2>Knowing These 7 Secrets Will Make Your Event Look Amazing</h2>
              </div>
            </div>
          </div>
          <div className={scss.newsCards}>
            <div className={scss.newsCard}>
              <img className={scss.image} src={city2} alt="img" onClick={clickSecond}/>
              <div className={scss.textNews}>
              <div className={scss.newsText}>
                <span>24 May 2019</span>
                <div className={scss.ul}></div>
                <span>8 mins</span>
              </div>
              <h2>Event Doesn't Have To Be Hard. Read These 7 Tips</h2>
              </div>
            </div>
            <div className={scss.newsCard}>
              <img className={scss.image} src={city4} alt="img" onClick={clickFourth}/>
              <div className={scss.textNews}>
              <div className={scss.newsText}>
                <span>24 May 2019</span>
                <div className={scss.ul}></div>
                <span>8 mins</span>
              </div>
              <h2>KDon't Waste Time! 7 Facts Until You Reach Your Event</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;

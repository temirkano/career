import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalConst } from "../../const/const";
import scss from "./GlobalConnections.module.scss";
import vector from "../../assets/GlobalConnectionsImg/Overlay.svg";
import prev from "../../assets/SayImg/prev.png";
import next from "../../assets/SayImg/next.png";

const GlobalConnections = () => {
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className={scss.wrapper}>
        <div className={scss.block}>
          <h1>
            Global <br />
            Connections
          </h1>
          <p>
            Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
            neque dolor, sagittis eget, iaculis quis.
          </p>
          <button className={scss.btnBlock}>
            <span className={scss.btnText}>Browse All </span>
            <img src={vector} alt="vectorWhite" />
          </button>
        </div>
        <div className={scss.slide}>
          <Slider ref={arrowRef} {...settings}>
            {GlobalConst.map((item) => (
              <div className={scss.blockSlide}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <b>{item.desc}</b>
              </div>
            ))}
          </Slider>
          <button
            className={scss.vector}
            onClick={() => arrowRef.current.slickPrev()}
          >
            <img src={prev} alt="iconPrev" />
          </button>
          <button
            className={scss.vector}
            onClick={() => arrowRef.current.slickNext()}
          >
            <img src={next} alt="iconNext" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalConnections;

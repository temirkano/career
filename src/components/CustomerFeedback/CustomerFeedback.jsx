import scss from "./CustomerFeedback.module.scss";
import solars from "../../assets/SayImg/solars.svg";
import prev from "../../assets/SayImg/prev.png";
import next from "../../assets/SayImg/next.png";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerFeedback = () => {
  const arrowRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Slider ref={arrowRef} {...settings}>
        <div>
          <div className={scss.review}>
            <h1>What Our Customer Say</h1>
            <img src={solars} alt="icon" />
            <p>
              Amazing experience i love it a lot. Thanks to the team that dreams
              come true, great! I appreciate there attitude and approach.
            </p>
            <h4>Robert Fox</h4>
            <i>Designer</i>
          </div>
        </div>
        <div>
          <div className={scss.review}>
            <h1>What Our Customer Say</h1>
            <img src={solars} alt="icon" />
            <p>
              Amazing experience i love it a lot. Thanks to the team that dreams
              come true, great! I appreciate there attitude and approach.
            </p>
            <h4>Robert Fox</h4>
            <i>Designer</i>
          </div>
        </div>
      </Slider>
      <button onClick={() => arrowRef.current.slickPrev()}>
        <img src={prev} alt="icon" />
      </button>
      <button onClick={()=> arrowRef.current.slickNext()}>
        <img src={next} alt="icon" />
      </button>
    </>
  );
};

export default CustomerFeedback;

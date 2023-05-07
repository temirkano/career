import scss from "./Main.module.scss";
import mainIcon from "../../assets/MainImg/mainIcon.svg";
import mainImg from "../../assets/MainImg/mainImg.png";

function Main() {
  return (
    <div className={scss.main}>
      <div className={scss.container}>
        <div className={scss.rightCon}>
          <span>FOR RECRUITERS</span>
          <h1>Do You Have A Position To Post Job? </h1>
          <p className={scss.p}>
            Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
            Morbi mattis ullamcorper velit.
          </p>
          <button>
            <img src={mainIcon} alt="icon" />
            <p className={scss.span}>Post a Job</p>
          </button>
        </div>
        <div className={scss.leftCon}>
          <img src={mainImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Main;

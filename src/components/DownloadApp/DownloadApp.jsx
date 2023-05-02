import scss from "./DownloadApp.module.scss";
import apple from "../../assets/AppImg/apple.svg";
import google from "../../assets/AppImg/googleplay.svg";
import app from "../../assets/AppImg/app.png";

function DownloadApp() {
  return (
    <div className={scss.container}>
      <div className={scss.appWrapper}>
        <div className={scss.rightContent}>
          <h1>Download App</h1>
          <p>Now finding the new job just got even easier with our new app!</p>
          <div className={scss.boxBtns}>
            <div className={scss.boxBtn}>
              <img src={apple} alt="icon" />
              <div className={scss.btnText}>
                <i>Download on the</i>
                <h3>Apple Store</h3>
              </div>
            </div>
            <div className={scss.boxBtn}>
              <img src={google} alt="icon" />
              <div className={scss.btnText}>
                <i>Download from</i>
                <h3>Google Play</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.leftContent}>
          <img className={scss.img} src={app} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;

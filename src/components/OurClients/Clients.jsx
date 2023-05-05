import scss from "./Clients.module.scss";
import airbnb from "../../assets/ClientsImg/airbnb.svg";
import heroku from "../../assets/ClientsImg/heroku.svg";
import netflix from "../../assets/ClientsImg/netflix.svg";
import slack from "../../assets/ClientsImg/slack.svg";
import spotify from "../../assets/ClientsImg/spotify.svg";
import vimeo from "../../assets/ClientsImg/vimeo.svg";

function Clients() {
  return (
    <div className={scss.container}>
      <div className={scss.clients}>
        <h1>Our Clients</h1>
        <p>
          Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget
          lorem. Etiam vitae tortor.
        </p>
        <div className={scss.boxIcons}>
          <div className={scss.boxIcon}>
            <img src={spotify} alt="icon" />
          </div>
          <div className={scss.boxIcon}>
            <img src={slack} alt="icon" />
          </div>
          <div className={scss.boxIcon}>
            <img src={netflix} alt="icon" />
          </div>
          <div className={scss.boxIcon}>
            <img src={heroku} alt="icon" />
          </div>
          <div className={scss.boxIcon}>
            <img src={vimeo} alt="icon" />
          </div>
          <div className={scss.boxIcon}>
            <img src={airbnb} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;

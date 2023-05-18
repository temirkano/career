import scss from "./MainCareer.module.scss";
import search from "../../assets/CareerMain/search.svg";
import location from "../../assets/CareerMain/location.svg";
import btnSearch from "../../assets/CareerMain/searchWhite.svg";
import lenovo from "../../assets/CareerMain/brand_lenovo.svg";
import netflix from "../../assets/CareerMain/brand_netflix.svg";
import slack from "../../assets/CareerMain/brand_slack.svg";
import spotify from "../../assets/CareerMain/brand_spotify.svg";
import leftImg from "../../assets/CareerMain/Component 2.png";
import HeaderSecond from "../HeaderSecond/HeaderSecond";

function MainCareer() {
  return (
    <div className={scss.wrapper}>
      <HeaderSecond/>
      <div className={scss.container}>
        <div className={scss.career}>
          <div className={scss.rightCareer}>
            <h1>
              Get The
              <span className={scss.span}>Career</span>
              <br />
              You Deserve
            </h1>
            <p className={scss.textContent}>
              Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
              sapien, quis venenatis ante odio sit amet eros.
            </p>
            <div className={scss.boxSearch}>
              <div className={scss.search}>
                <img src={search} alt="icon" />
                <input
                  className={scss.inputSearch}
                  type="text"
                  placeholder="Job title, keywords..."
                />
              </div>
              <div className={scss.hr}></div>
              <div className={scss.location}>
                <img src={location} alt="icon" />
                <p>Locations</p>
              </div>
              <button>
                <img src={btnSearch} alt="icon" />
                <p className={scss.textSearch}>Search</p>
              </button>
            </div>
            <div className={scss.brands}>
              <div className={scss.brand}>
                <img src={spotify} alt="icon" />
                <img src={slack} alt="icon" />
              </div>
              <div className={scss.brand}>
                <img src={netflix} alt="icon" />
                <img src={lenovo} alt="icon" />
              </div>
            </div>
            <div className={scss.follovers}>
              <div className={scss.follover}>
                <div className={scss.textFollover}>
                  <h2>2m+</h2>
                  <p>Jobs</p>
                </div>
                <div className={scss.dashed}></div>
                <div className={scss.textFollover}>
                  <h2>500k+</h2>
                  <p className={scss.textFollovers}>Successful Hiring</p>
                </div>
                <div className={scss.dashed2}></div>
              </div>
              <div className={scss.follover}>
                <div className={scss.textFollover}>
                  <h2>250k+</h2>
                  <p>Partners</p>
                </div>
                <div className={scss.dashed}></div>
                <div className={scss.textFollover}>
                  <h2>1,56k +</h2>
                  <p>Employee</p>
                </div>
                <div className={scss.dashed2}></div>
              </div>
            </div>
          </div>
          <div className={scss.leftCareer}>
            <img src={leftImg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCareer;

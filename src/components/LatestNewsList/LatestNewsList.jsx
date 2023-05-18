import scss from "./LatestNewsList.module.scss";
import vector from "../../assets/LatestNewsImg/vectorLeft.svg";
import LatestNews from "../LatestNews/LatestNews"

function LatestNewsList() {
  return (
    <div className={scss.container}>
      <div className={scss.newsList}>
        <div className={scss.newsRight}>
          <span>BLOG</span>
          <h1>Read Our Lates News</h1>
          <p>
            Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et,
            volutpat molestie, porta ut, ligula.
          </p>
        </div>
        <div className={scss.newsLeft}>
            <button>
            View All
            <img src={vector} alt="vectorLeft" />
            </button>
        </div>
      </div>
      <LatestNews/>
      <div className={scss.newsLeft1}>
            <button>
            View All
            <img src={vector} alt="vectorLeft" />
            </button>
        </div>
    </div>
  );
}

export default LatestNewsList;

import scss from "./Sales.module.scss";
import vector from "../../assets/SalesImg/Vector.svg";
import baggage from "../../assets/SalesImg/baggage.svg";
import eye from "../../assets/SalesImg/eye.svg";
import pin from "../../assets/SalesImg/pin.svg";
import like from "../../assets/SalesImg/like.svg";


function Sales() {
  return (
    <div className={scss.sales}>
      <div className={scss.container}>
        <div className={scss.rightSales}>
          <div className={scss.link}>
            <a href="">Home</a>
            <img src={vector} alt="vector" />
            <a href="">Jobs</a>
            <img src={vector} alt="vector" />
            <a>Category</a>
            <img src={vector} alt="vector" />
            <a className={scss.sls}>President of Sales</a>
          </div>
          <h1>President of Sales</h1>
          <div className={scss.dataBoxs}>
            <div className={scss.dataBox}>
              <img src={baggage} alt="baggageIcon" />
              <a href="">Marketing</a>
            </div>
            <div className={scss.dataBox}>
              <img src={eye} alt="eyeIcon" />
              <p>286 views</p>
            </div>
            <div className={scss.dataBox}>
              <img src={pin} alt="pinIcon" />
              <p>Virgin Islands, British</p>
            </div>
          </div>
        </div>
        <div className={scss.leftSales}>
          <div className={scss.checkBox}>
            <button>Apply Now</button>
            <img src={like} alt="likeIcon" />
          </div>
          <p>Expiration date:
            <span> 19 May 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sales;

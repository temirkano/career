import scss from "./LoveWorking.module.scss";
import jobIcon from "../../assets/LoveWorkingImg/jobIcon.svg";
import jobIcon1 from "../../assets/LoveWorkingImg/jobIcon1.svg";
import jobIcon2 from "../../assets/LoveWorkingImg/jobIcon2.svg";
import jobIcon3 from "../../assets/LoveWorkingImg/jobIcon3.svg";
import jobIcon4 from "../../assets/LoveWorkingImg/jobIcon4.svg";
import jobIcon5 from "../../assets/LoveWorkingImg/jobIcon5.svg";
import btnImg from "../../assets/LoveWorkingImg/ButtonImg.svg";
import btnImg1 from "../../assets/LoveWorkingImg/ButtonImg1.svg";
import btnImg2 from "../../assets/LoveWorkingImg/ButtonImg2.svg";
import btnImg3 from "../../assets/LoveWorkingImg/ButtonImg3.svg";
import dropBox from "../../assets/LoveWorkingImg/IMG.svg";

function LoveWorking() {
  return (
    <div className={scss.container}>
      <div className={scss.workingRightContent}>
        <div className={scss.loveWorkingText}>
          <h1>Why You'll Love Working Here</h1>
          <ul>
            <li>
              Working with agency for design drawing detail, quotation and local
              production
            </li>
            <li>
              Produce window displays, signs, interior displays, floor plans and
              special promotions displays
            </li>
            <li>
              {" "}
              Change displays to promote new product launches and reflect
              festive or seasonal themes
            </li>
            <li>
              Planning and executing the open/renovation/ closing store
              procedure
            </li>
            <li>
              Follow‐up store maintenance procedure and keep updating SKU In &
              Out
            </li>
            <li>Monitor costs and work within budget</li>
            <li>Liaise with suppliers and source elements</li>
          </ul>
        </div>
        <div className={scss.jobSkills}>
          <h1>Job Skills</h1>
          <div className={scss.jobBox}>
            <p>Photography</p>
            <p>Design</p>
            <p> Art</p>
            <p className={scss.history}>History</p>
            <p>Museums</p>
            <p className={scss.creativity}>Creativity</p>
            <p className={scss.art}>Art History</p>
          </div>
        </div>
        <div className={scss.advantages}>
          <h1>Other Benefits</h1>
          <div className={scss.boxsAdvantages}>
            <div className={scss.advantagesBox}>
              <img src={jobIcon} alt="JobIcon" />
              <p>Free parking</p>
            </div>
            <div className={scss.advantagesBox}>
              <img src={jobIcon1} alt="JobIcon" />
              <p>Bonus commission</p>
            </div>
            <div className={scss.advantagesBox}>
              <img src={jobIcon2} alt="JobIcon" />
              <p>Travel</p>
            </div>
          </div>
          <div className={scss.boxsAdvantages}>
            <div className={scss.advantagesBox}>
              <img src={jobIcon3} alt="JobIcon" />
              <p>Training</p>
            </div>
            <div className={scss.advantagesBox}>
              <img src={jobIcon4} alt="JobIcon" />
              <p>Device support</p>
            </div>
            <div className={scss.advantagesBox}>
              <img src={jobIcon5} alt="Jobicon" />
              <p>Health care</p>
            </div>
          </div>
        </div>
        <div className={scss.location}>
          <h1>Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3877622247555!2d74.59295271547174!3d42.84354487915743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb620e9c75a0b%3A0x75cc9f8c5cd22e08!2zMTMzINGD0LsuINCQ0YXRg9C90LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1684248110723!5m2!1sru!2skg"
            width="746"
            height="480"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={scss.hr}></div>
        <div className={scss.share}>
          <h3>Share:</h3>
          <div className={scss.btnsShare}>
            <button>
              <img src={btnImg} alt="FaceBook" />
            </button>
            <button>
              <img src={btnImg1} alt="Instagram" />
            </button>
          </div>
          <div className={scss.btnsShare}>
            <button>
              <img src={btnImg2} alt="Linkedin" />
            </button>
            <button>
              <img src={btnImg3} alt="Twitter" />
            </button>
          </div>
        </div>
      </div>
      <div className={scss.workingLeftContent}>
        <div className={scss.dropBox}>
          <img src={dropBox} alt="dropBox" />
          <div className={scss.dropBoxText}>
            <h3>Dropbox</h3>
            <p>View Company Profile</p>
          </div>
        </div>
        <div className={scss.jobs}>
          <h2>Jobs From This Company</h2>
          <h3>Marketing Coordinator</h3>
          <p>Expiration date May 19, 2026</p>
          <div className={scss.dashed}></div>
          <h3>Dog Trainer</h3>
          <p>Expiration date May 19, 2026</p>
          <div className={scss.dashed}></div>
          <h3>Nursing Assistant</h3>
          <p>Expiration date May 19, 2026</p>
        </div>
        <div className={scss.advertisement}>
          <h3>Advertisement</h3>
          <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
          <button>Go Now</button>
        </div>
      </div>
    </div>
  );
}

export default LoveWorking;

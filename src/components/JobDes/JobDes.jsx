import React from "react";
import css from "./JobDes.module.scss";
import calendr from '../../assets/JobsImg/ic_calendar.svg'
import time from '../../assets/JobsImg/ic_hourglass.svg'
import cash from '../../assets/JobsImg/ic_cash.svg'
import top from '../../assets/JobsImg/ic_increase_level.svg'
import user from '../../assets/JobsImg/ic_user.svg'
import translate from '../../assets/JobsImg/ic_translate.svg'
import { use } from "i18next";

function JobDes() {
  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.left}>
          <div className={css.tx1}>
            <h1>Job Description</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className={css.tx2}>
            <h1>Key Responsibilities</h1>
            <ul>
              <li>
                Working with agency for design drawing detail, quotation and
                local production
              </li>
              <li>
                Produce window displays, signs, interior displays, floor plans
                and special promotions displays
              </li>
              <li>
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
        </div>
        <div className={css.right}>
            <div className={css.flex}>
              <div>
                <img src={calendr} alt="" />
              </div>
              <div className={css.text}>
                <h2>Date Posted</h2>
                <p>October 24, 2018</p>
              </div>
            </div>
            <div className={css.flex}>
              <div>
                <img src={time} alt="" />
              </div>
              <div className={css.text}>
                <h2>Expiration date</h2>
                <p className={css.p}>Expires in 7 days</p>
              </div>
            </div>
            <div className={css.flex}>
              <div>
                <img src={cash} alt="" />
              </div>
              <div className={css.text}>
                <h2>Offered Salary (month)</h2>
                <p>$1,250 ~ $3000</p>
              </div>
            </div>
            <div className={css.flex}>
              <div>
                <img src={top} alt="" />
              </div>
              <div className={css.text}>
                <h2>Experience</h2>
                <p>3 Years</p>
              </div>
            </div>
            <div className={css.flex}>
              <div>
                <img src={user} alt="" />
              </div>
              <div className={css.text}>
                <h2>Level</h2>
                <p>Intern/Student</p>
              </div>
            </div>
            <div className={css.flex}>
              <div>
                <img src={translate} alt="" />
              </div>
              <div className={css.text}>
                <h2>Language</h2>
                <p>Any</p>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default JobDes;

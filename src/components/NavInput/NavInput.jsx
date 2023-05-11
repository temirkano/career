import React from "react";
import { useState } from "react";
import css from "./NavInput.module.scss";
import map from "../../assets/Input/map.svg";
import serch from "../../assets/Input/serch.svg";
import keys from "../../assets/Input/keys.svg";
import serch_wi from "../../assets/Input/serch_whi.svg";
import filters from "../../assets/Input/filters.svg";
import Modal from "../Modal/Modal";

function NavInput() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.input}>
          <div className={css.in1}>
            <input type="text" placeholder="Job title, keywords..." />
          </div>
          <div className={css.in2}>
            <div>
              <select id="format">
                <option selected disabled>
                  Categories
                </option>
                <option>Categories</option>
                <option>asdd</option>
                <option>adssa</option>
                <option>edasd</option>
              </select>
            </div>
          </div>
          <div className={css.in3}>
            <div>
              <select id="format">
                <option selected disabled>
                  Locations
                </option>
                <option>Locations</option>
                <option>PDF</option>
                <option>txt</option>
                <option>ePub</option>
              </select>
            </div>
          </div>
          <div className={css.button}>
            <img src={serch_wi} alt="" />
            <p>search</p>
          </div>
        </div>
        <div className={css.bottNav}>
          <div className={css.nav}>
            <select>
              <option>Job type</option>
              <option>sad</option>
              <option>adas</option>
            </select>
          </div>
          <div className={css.nav2}>
            <select>
              <option>All levels</option>
              <option>sad</option>
              <option>adas</option>
            </select>
          </div>
          <div className={css.nav3}>
            <select>
              <option>All salary ranges</option>
              <option>sad</option>
              <option>adas</option>
            </select>
          </div>
          <div className={css.nav4}>
            <select>
              <option>Benefits</option>
              <option>sad</option>
              <option>adas</option>
            </select>
          </div>
        </div>
        <div className={css.fillter}>
          <div className={css.btn} onClick={() => setModalActive(true)}>
            <img src={filters} alt="" />
            <button>Filters</button>
          </div>
          <Modal active={modalActive} setActive={setModalActive}>
            <div className={css.box}>
              <div className={css.content}>
                <div className={css.in_1}>
                  <input type="text" placeholder="Job title, keywords..." />
                </div>
                <div className={css.in_2}>
                  <div>
                    <select id="format">
                      <option selected disabled>
                        Categories
                      </option>
                      <option>Categories</option>
                      <option>asdd</option>
                      <option>adssa</option>
                      <option>edasd</option>
                    </select>
                  </div>
                </div>
                <div className={css.in_3}>
                  <div>
                    <select id="format">
                      <option selected disabled>
                        Locations
                      </option>
                      <option>Locations</option>
                      <option>PDF</option>
                      <option>txt</option>
                      <option>ePub</option>
                    </select>
                  </div>
                </div>
                <div className={css.button}>
                  <img src={serch_wi} alt="" />
                  <span>search</span>
                </div>
              </div>

              <div className={css.content2}>
                <div className={css.nav}>
                  <select>
                    <option>Job type</option>
                    <option>sad</option>
                    <option>adas</option>
                  </select>
                </div>
                <div className={css.nav2}>
                  <select>
                    <option>All levels</option>
                    <option>sad</option>
                    <option>adas</option>
                  </select>
                </div>
                <div className={css.nav3}>
                  <select>
                    <option>All salary ranges</option>
                    <option>sad</option>
                    <option>adas</option>
                  </select>
                </div>
                <div className={css.nav4}>
                  <select>
                    <option>Benefits</option>
                    <option>sad</option>
                    <option>adas</option>
                  </select>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default NavInput;

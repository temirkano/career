import React, { useState } from "react";
import scss from "./FooterSecond.module.scss";
import logo from '../../assets/footerImg/logoMain.svg'
import message from '../../assets/footerImg/Message.svg'
import marker from '../../assets/footerImg/marker.svg'
import arrow from '../../assets/footerImg/iconbase.svg'
import inli from '../../assets/footerImg/inli.svg'
import instagram from '../../assets/footerImg/instagram.svg'
import tweeter from '../../assets/footerImg/tweeter.svg'
import facebook from '../../assets/footerImg/facebook.svg'

function FooterSecond() {
  return (
    <div className={scss.container}>
    <div className={scss.footWrapper}>
        <div className={scss.flexFoot}>
          <div className={scss.leftSocial}>
            <div>
              <a href="/">
                <img
                  src={logo} 
                  alt="icon"
                />
              </a>
              <p>
                The starting point for your next project based on
                easy-to-customize Material-UI © helps you build apps faster and
                better.
              </p>
              <div className={scss.socials}>
                <a href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="icon"
                  />
                </a>
                <a href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="icon"
                  />
                </a>
                <a href="https://linkedin.com">
                  <img
                    src={inli}
                    alt="icon"
                  />
                </a>
                <a href="https://twitter.com/">
                  <img
                    src={tweeter}
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <div className={scss.contact}>
              <div className={scss.flex}>
                <img
                  src={message}
                  alt="icon"
                />
                <p>
                  <a
                    href="https://mail.google.com/"
                  >
                    info@example.com
                  </a>
                </p>
              </div>
              <div className={scss.flex}>
                <img
                  src={marker}
                  alt="icon"
                />
                <p>
                  <a
                    href="https://www.google.com/maps/place/thebongeats/@33.3805929,-84.9397429,11z/data=!3m1!4b1!4m6!3m5!1s0x88f4c8f1571eea6d:0xb55215d8bc210654!8m2!3d33.3806716!4d-84.7996573!16s%2Fg%2F11pvkmst6l"
                  >
                    655 Schaefer Dale
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className={scss.inputFoot2}>
            <input type="text" placeholder="Email address" />
            <button>
              <img src={arrow} alt="icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={scss.flexFinal}>
          <p>© 2021. All rights reserved</p>
          <div className={scss.flex}>
            <p>Help Center</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSecond;

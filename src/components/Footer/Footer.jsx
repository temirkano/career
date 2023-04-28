import FooterSecond from "../FooterSecond/FooterSecond";
import scss from "./Footer.module.scss";

function Footer() {
  return (
    <div className={scss.footer}>
      <div className={scss.footerBox}>
        <h1>Get The Right Job For You</h1>
        <p>
          Subscribe to get updated on latest and relevant career opportunities
        </p>
        <div className={scss.searchFooter}>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <FooterSecond />
    </div>
  );
}

export default Footer;

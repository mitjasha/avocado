import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__creators">
          <h3 className="title">Creators</h3>
          <ul className="creators">
            <li className="creators__item">
              <a href="https://github.com/mitjasha">mitjasha</a>
            </li>
            <li className="creators__item">
              <a href="https://github.com/asya2320">asya2320</a>
            </li>
            <li className="creators__item">
              <a href="https://github.com/viktoriakondrashova1">
                ViktoriaKondrashova1
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__school-link">
          <a href="https://rs.school/js/" className="school-link">
            RS School
          </a>
          <div>2023</div>
        </div>
        <div className="footer__media">
          <a href="https://www.facebook.com/">
            <div className="footer__media-icon footer__media-icon_fb" />
          </a>
          <a href="https://www.instagram.com/">
            <div className="footer__media-icon footer__media-icon_inst" />
          </a>
          <a href="https://www.youtube.com/">
            <div className="footer__media-icon footer__media-icon_yt" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

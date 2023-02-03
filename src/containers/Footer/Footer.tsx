import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__creators">
          Creators
          <ul className="creators-list">
            <li className="list-item">
              <a href="https://github.com/mitjasha">mitjasha</a>
            </li>
            <li className="list-item">
              <a href="https://github.com/asya2320">asya2320</a>
            </li>
            <li className="list-item">
              <a href="https://github.com/viktoriakondrashova1">
                ViktoriaKondrashova1
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__media">
          <a href="https://www.facebook.com/">
            <div className="media-icon fb-icon" />
          </a>
          <a href="https://www.instagram.com/">
            <div className="media-icon insta-icon" />
          </a>
          <a href="https://www.youtube.com/">
            <div className="media-icon youtube-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

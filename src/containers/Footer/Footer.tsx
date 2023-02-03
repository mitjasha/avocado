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
      </div>
    </footer>
  );
};
export default Footer;

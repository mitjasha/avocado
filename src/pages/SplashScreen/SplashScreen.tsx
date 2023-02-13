import React from "react";
import "./SplashScreen.scss";
import { Link } from "react-router-dom";
import logoSVG from "../../assets/img/svg/logo.svg";
import Button from "../../components/Buttons/Button/Button";
import LogoComponent from "../../components/LogoComponent/LogoComponent";

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <div className="container splash-container">
        <LogoComponent className="logo" />
        <figure className="figure">
          <img src={logoSVG} alt="logo" />
          <figcaption className="figure__text">You are what you eat</figcaption>
        </figure>
        <div className="button-container">
          <Button to="/registration"> Get Started!</Button>

          <div className="button-container__text">
            Already have an account?{" "}
            <Link className="button-container__link" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SplashScreen;

import React, { useEffect, useState } from "react";
import "./SplashScreen.scss";
import { Link, useNavigate } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import logoSVG from "../../assets/img/svg/logo.svg";
import Button from "../../components/Buttons/Button/Button";
import LogoComponent from "../../components/LogoComponent/LogoComponent";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  // const loginStatus = localStorage.getItem("loginStatus");
  const loginStatus = true;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (loginStatus) {
        navigate("/main");
      } else {
        setLoading(false);
      }
    }, 5000);
  }, []);

  return (
    <div className="splash-screen">
      <div className="container splash-container">
        <LogoComponent className="logo" />
        <figure className="figure">
          <img src={logoSVG} alt="logo" />
          <figcaption className="figure__text">You are what you eat</figcaption>
        </figure>

        <div className="button-container">
          <PacmanLoader
            className="button-container__spiner"
            color="#C6E8AA"
            loading={loading}
            size={40}
          />
          {!loading && (
            <>
              <Button to="/registration"> Get Started!</Button>
              <div className="button-container__text">
                Already have an account?{" "}
                <Link className="button-container__link" to="/login">
                  Log In
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default SplashScreen;

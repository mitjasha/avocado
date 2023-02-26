import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PacmanLoader from "react-spinners/PacmanLoader";
import logoSVG from "../../assets/img/svg/logo.svg";
import Button from "../../components/Buttons/Button/Button";
import LogoComponent from "../../components/LogoComponent/LogoComponent";
import "./SplashScreen.scss";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else document.documentElement.setAttribute("data-theme", "dark");
  } else document.documentElement.setAttribute("data-theme", "light");

  useEffect(() => {
    setTimeout(() => {
      if (accessToken) {
        navigate("/main");
      } else {
        setLoading(false);
      }
    }, 3000);
  }, []);

  return (
    <div className="splash-screen">
      <div className="container splash-container">
        <LogoComponent className="logo" />
        <figure className="figure">
          <img src={logoSVG} alt="logo" />
          <figcaption className="figure__text">{t("splash_phrase")}</figcaption>
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
              <Button
                to="/registration/user"
                className="button-container__button"
              >
                {" "}
                {t("splash_button")}
              </Button>
              <div className="button-container__text">
                {t("splash_login_text")}
                <Link className="button-container__link" to="/login">
                  {t("splash_login")}
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

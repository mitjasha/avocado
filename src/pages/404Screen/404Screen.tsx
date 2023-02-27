import React from "react";
import Button from "../../components/Buttons/Button/Button";
import "./404Screen.scss";

const Screen404: React.FC = () => {
  return (
    <div className="screen-404">
      <div className="container">
        <h1 className="screen-404__title">404</h1>
        <h2 className="screen-404__subtitle">
          Oops! The page can&apos;t be found
        </h2>
        <Button className="screen-404__btn" to="/main">
          Back to the main page
        </Button>
      </div>
    </div>
  );
};

export default Screen404;

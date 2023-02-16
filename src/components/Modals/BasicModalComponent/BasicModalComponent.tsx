import React from "react";
import "./BasicModalComponent.scss";

export interface BasicModalComponentProps {
  children?: React.ReactNode;
  title?: string;
}

const BasicModalComponent: React.FC<BasicModalComponentProps> = ({
  children,
  title,
}) => {
  const closePopUp = () => {
    const popUp = document.querySelector(
      ".pop-up-wrapper",
    ) as HTMLButtonElement;
    popUp.style.opacity = "0";
    popUp.style.visibility = "hidden";
  };

  return (
    <div className="pop-up-wrapper">
      <div className="pop-up">
        <button
          type="button"
          className="pop-up__close"
          aria-label="close"
          onClick={closePopUp}
        />
        <h3 className="pop-up__title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default BasicModalComponent;

import React from "react";
import "./BasicModalComponent.scss";

export interface BasicModalComponentProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

const BasicModalComponent: React.FC<BasicModalComponentProps> = ({
  children,
  title,
  className,
}) => {
  const closePopUp = () => {
    const popUps = document.querySelectorAll<HTMLElement>(".pop-up-wrapper");
    popUps.forEach((elem) => {
      const popUp = elem;
      popUp.style.opacity = "0";
      popUp.style.visibility = "hidden";
    });
  };

  const classes = `${"pop-up-wrapper"} ${className}`;

  return (
    <div className={classes}>
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

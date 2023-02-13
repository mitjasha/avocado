import React from "react";
import "./ActivityPopUp.scss";

interface ActivityPopUpProps {
  name: string;
}

const ActivityPopUp: React.FC<ActivityPopUpProps> = ({ name }) => {
  const closeActivityPopUp = () => {
    const popUp = document.querySelector(
      ".activity-popup",
    ) as HTMLButtonElement;
    popUp.style.opacity = "0";
    popUp.style.visibility = "hidden";
  };
  return (
    <div className="activity-popup">
      <div className="activity-popup__wrapper">
        <button
          type="button"
          className="activity-popup__close"
          aria-label="close"
          onClick={closeActivityPopUp}
        />
        <h2 className="activity-popup__title">{name}</h2>
      </div>
    </div>
  );
};
export default ActivityPopUp;

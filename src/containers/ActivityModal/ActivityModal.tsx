import React from "react";
import "./ActivityModal.scss";

interface ActivityModalProps {
  name: string;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ name }) => {
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
export default ActivityModal;

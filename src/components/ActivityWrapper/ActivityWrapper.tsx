import React from "react";
import "./ActivityWrapper.scss";

interface ActivityWrapperProps {
  name: string;
  image: string;
  handleClick: () => void;
}

const ActivityWrapper: React.FC<ActivityWrapperProps> = ({
  name,
  image,
  handleClick,
}) => {
  return (
    <button className="activity-wrapper" onClick={handleClick} type="button">
      <img className="activity-wrapper__image" src={image} alt={name} />
      <h3 className="activity-wrapper__title">{name}</h3>
    </button>
  );
};

export default ActivityWrapper;

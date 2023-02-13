import React from "react";
import "./ActivityWrapper.scss";

interface ActivityWrapperProps {
  name: string;
  image: string;
}

const ActivityWrapper: React.FC<ActivityWrapperProps> = ({ name, image }) => {
  return (
    <div className="activity-wrapper">
      <img className="activity-wrapper__image" src={image} alt={name} />
      <h3 className="activity-wrapper__title">{name}</h3>
    </div>
  );
};
export default ActivityWrapper;

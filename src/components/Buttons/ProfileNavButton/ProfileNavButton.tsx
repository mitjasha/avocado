import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavButton.scss";

export interface ProfileNavButtonProps {
  to?: string;
  className?: string;
  title: string;
}

const ProfileNavButton: React.FC<ProfileNavButtonProps> = ({
  to,
  className,
  title,
}) => {
  const classes = `${"list-item__icon"} ${className}`;
  return (
    <li className="list-item">
      <Link to={to || "/404"} className="list-item__link">
        <div className={classes} />
        <p className="list-item__name">{title}</p>
      </Link>
    </li>
  );
};

export default ProfileNavButton;

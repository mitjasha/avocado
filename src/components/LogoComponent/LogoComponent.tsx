import React from "react";
import "./LogoComponent.scss";

interface LogoProps {
  className?: string;
}

const LogoComponent: React.FC<LogoProps> = ({ className }) => {
  const classes = `${"logo"} ${className}`;
  return <h1 className={classes}>AVOCADO</h1>;
};

export default LogoComponent;

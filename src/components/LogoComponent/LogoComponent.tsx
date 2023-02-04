import React from "react";
import "./LogoComponent.scss";

interface LogoProps {
  className?: string;
}

const LogoComponent: React.FC<LogoProps> = ({ className }) => {
  return <h1 className={className}>AVOCADO</h1>;
};

export default LogoComponent;

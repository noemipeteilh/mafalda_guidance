import React from "react";
import { But } from "./styled-button";


const Button = ({ to, icon, backgroundColor, textColor, nameButton, isBold }) => {
  return (
    <>
    <But
      to={to}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hasIcon={!!icon}
      isBold={isBold} 
    >
      {icon && <img src={icon} alt="icon" />}
      {nameButton}
    </But>
    </>
  );
};

export default Button;

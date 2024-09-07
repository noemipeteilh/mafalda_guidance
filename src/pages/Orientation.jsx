import React from "react";
import { Link } from "react-router-dom";
import LogoMafalda from "../assets/images/Logo.png";
import Button from "../components/Button.jsx";
import { Body, Logo, ButtonGroup } from "../styled/styled-orientation.jsx";


const Orientation = () => {
return (
<>
<Body>
<Logo src={LogoMafalda} alt="Logo"></Logo>
<ButtonGroup>
<Button
        to="/advices"
        nameButton="Presiona aquí"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
        isBold={true} 
/>
</ButtonGroup>
</Body>
</>
);
};

export default Orientation;
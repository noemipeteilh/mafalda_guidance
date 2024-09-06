import React from "react";
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
        to="/advice"
        nameButton="Presiona aquí"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
</ButtonGroup>
</Body>
</>
);
};

export default Orientation;
import React from "react";
import LogoMafalda from "../assets/images/Logo.png";
import MafaldaTesta from "../assets/images/MafaldaTesta.png";
import Button from "../components/Button.jsx";
import { Body, Title, Logo, ButtonGroup, Img } from "../styled/styled-filter.jsx";


const Filter = () => {
return (
<>
<Body>
<Logo src={LogoMafalda} alt="Logo"></Logo>
<Title>¿CUÁNTOS AÑOS TIENE? </Title>
<ButtonGroup>
<Button
        to="/conducts"
        nameButton="Menos de 3"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
<Button
        to="/conducts"
        nameButton="3-6"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
<Button
        to="/conducts"
        nameButton="7-9"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
<Button
        to="/conducts"
        nameButton="10-12"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
</ButtonGroup>
<Img src={MafaldaTesta} alt="Img"></Img>
</Body>
</>
);
};

export default Filter;
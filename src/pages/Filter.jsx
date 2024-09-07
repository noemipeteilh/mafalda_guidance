import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext"; // Importa el contexto
import LogoMafalda from "../assets/images/Logo.png";
import MafaldaTesta from "../assets/images/MafaldaTesta.png";
import BackImage from "../assets/images/icons8-izquierda-en-círculo-2-100.png";
import Button from "../components/Button.jsx";
import { Back, Body, Title, Logo, ButtonGroup, Img } from "../styled/styled-filter.jsx";


const Filter = () => {
return (
<>
<Body>
<Link to="/parameters">
<Back src={BackImage} alt="Back" />
</Link>
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
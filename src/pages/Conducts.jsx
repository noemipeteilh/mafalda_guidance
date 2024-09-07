import React from "react";
import { useFilter } from "../context/FilterContext"; // Importa el contexto
import LogoMafalda from "../assets/images/Logo.png";
import Rabieta from "../assets/images/Rabieta.png";
import Button from "../components/Button.jsx";
import { Body, Title, Logo, ButtonGroup, Img } from "../styled/styled-conducts.jsx";


const Conducts = () => {
const { setConducta } = useFilter(); // Usa el contexto para actualizar la conducta
return (
<>
<Body>
<Logo src={LogoMafalda} alt="Logo"></Logo>
<Title>¿QUÉ TE PREOCUPA? </Title>
<ButtonGroup>
<Button
        to="/orientation"
        nameButton="Sueño/Pesadillas"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
<Button
        to="/orientation"
        nameButton="Rabietas"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
<Button
        to="/orientation"
        nameButton="Control de Micción"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
<Button
        to="/orientation"
        nameButton="Miedos"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
<Button
        to="/orientation"
        nameButton="Hiperactividad"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
</ButtonGroup>
<Img src={Rabieta} alt="Img"></Img>
</Body>
</>
);
};

export default Conducts;
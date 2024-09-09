import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext"; // Importa el contexto
import BackImage from "../assets/images/icons8-izquierda-en-círculo-2-100.png";
import LogoMafalda from "../assets/images/Logo.png";
import Rabieta from "../assets/images/Rabieta.png";
import Button from "../components/Button.jsx";
import { Back, Body, Title, Logo, ButtonGroup, Img } from "../styled/styled-conducts.jsx";


const Conducts = () => {
const { updateConducta } = useFilter(); // Usa el contexto para actualizar la conducta
const handleConductaChange = (newConducta) => {
  updateConducta(newConducta); // Actualiza el género en el contexto
};

return (
<>
<Body>
<Link to="/filter">
<Back src={BackImage} alt="Back" />
</Link>
<Logo src={LogoMafalda} alt="Logo"></Logo>
<Title>¿QUÉ TE PREOCUPA? </Title>
<ButtonGroup>
<Button
        to="/orientation"
        nameButton="Sueño/Pesadillas"
        backgroundColor="#FFFF"
        textColor="#Fc7900"
        isBold={true}
        onClick={() => handleConductaChange("Sueño/Pesadillas")}
/>
<Button
        to="/orientation"
        nameButton="Rabietas"
        backgroundColor="#FFFF"
        textColor="#Fc7900"
        isBold={true}
        onClick={() => handleConductaChange("Rabietas")}
/>
<Button
        to="/orientation"
        nameButton="Control de Micción"
        backgroundColor="#FFFF"
        textColor="#Fc7900"
        isBold={true}
        onClick={() => handleConductaChange("Control de Micción")}
/>
<Button
        to="/orientation"
        nameButton="Miedos"
        backgroundColor="#FFFF"
        textColor="#Fc7900"
        isBold={true}
        onClick={() => handleConductaChange("Miedos")} 
/>
<Button
        to="/orientation"
        nameButton="Hiperactividad"
        backgroundColor="#FFFF"
        textColor="#Fc7900"
        isBold={true}
        onClick={() => handleConductaChange("Hiperactividad")} 
/>
</ButtonGroup>
<Img src={Rabieta} alt="Img"></Img>
</Body>
</>
);
};

export default Conducts;
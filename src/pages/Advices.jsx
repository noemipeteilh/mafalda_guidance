import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";
import BackImage from "../assets/images/icons8-izquierda-en-círculo-2-100.png";
import LogoMafalda from "../assets/images/Logo.png";
import Notes from "../assets/images/Notes.png";
import Gialla from "../assets/images/Gialla.png";
import { Back, Body, Logo, NotesImg, GiallaImg, AdvicesContainer } from "../styled/styled-advices.jsx";
import { data } from "../data/data.js";

const Advices = () => {
const [consejo, setConsejo] = useState('No hay consejos disponibles para los filtros seleccionados.');
const { genero, edad, conducta } = useFilter();

useEffect(() => {
    console.log(`Género: ${genero}`); 
    console.log(`Edad: ${edad}`);
    console.log(`Conducta: ${conducta}`); 

    const resultado = data.filter(persona =>
    (!genero || persona.genero === genero) &&
    (!edad || persona.edad === edad) &&
    (!conducta || persona.conducta === conducta)
    );

    if (resultado.length > 0) {
    setConsejo(resultado[0].consejo);
    } else {
    setConsejo('No hay consejos disponibles para los filtros seleccionados.');
    }
}, [genero, edad, conducta]);

return (
    <Body>
    <Link to="/">
        <Back src={BackImage} alt="Back" />
    </Link>
    <Logo src={LogoMafalda} alt="Logo" />
    <div style={{ position: 'relative' }}>
    <NotesImg src={Notes} alt="Notes" />
    <AdvicesContainer>
        <p>{consejo}</p>
        </AdvicesContainer>
    </div>
    <GiallaImg src={Gialla} alt="Gialla" />
    </Body>
);
};

export default Advices;

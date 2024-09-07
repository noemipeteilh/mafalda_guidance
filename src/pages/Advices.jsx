import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterContext";
import LogoMafalda from "../assets/images/Logo.png";
import Notes from "../assets/images/Notes.png";
import Gialla from "../assets/images/Gialla.png";
import { Body, Logo, NotesImg, GiallaImg } from "../styled/styled-advices.jsx";
import { data } from "../data/data.js";

const Advices = () => {
const [consejo, setConsejo] = useState('');
const { genero, edad, conducta } = useFilter();

useEffect(() => {
    const resultado = data.filter(persona =>
    persona.Genre === genero &&
    persona.age === edad &&
    persona.behavior === conducta
    );

    if (resultado.length > 0) {
    setConsejo(resultado[0].advice);
    } else {
    setConsejo('No hay consejos disponibles para los filtros seleccionados.');
    }
}, [genero, edad, conducta]);

return (
    <Body>
    <Logo src={LogoMafalda} alt="Logo" />
    <div style={{ position: 'relative' }}>
        <NotesImg src={Notes} alt="Notes" />
        <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'
        }}>
        <p>{consejo}</p>
        </div>
    </div>
    <GiallaImg src={Gialla} alt="Gialla" />
    </Body>
 );
};

export default Advices;

import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext.jsx"; // Importa el contexto
import LogoMafalda from "../assets/images/Logo.png";
import Felipe from "../assets/images/Felipe.png";
import Susanita from "../assets/images/Susanita.png";
import { Body, Title, Title1, Title2, Logo, Img } from "../styled/styled-parameters.jsx";


const Parameters = () => {
    const { updateGenero } = useFilter(); 

    const handleGeneroChange = (newGenero) => {
    updateGenero(newGenero); 
    };

return (

    <>
    
<Body>
<Logo src={LogoMafalda} alt="Logo"></Logo>
<Title>¿TIENES </Title>
<Link to="/filter" onClick={() => handleGeneroChange("Niño")}>
        <Img src={Felipe} alt="Felipe" />
    </Link>
<Title1>UN NIÑO?</Title1>
<Link to="/filter" onClick={() => handleGeneroChange("Niña")}>
        <Img src={Susanita} alt="Susanita" />
    </Link>
<Title2>UNA NIÑA?</Title2>
</Body>
</>
);
};

export default Parameters;
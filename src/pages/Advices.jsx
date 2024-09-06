import React from "react";
import LogoMafalda from "../assets/images/Logo.png";
import Notes from "../assets/images/Notes.png";
import Gialla from "../assets/images/Gialla.png";
import { Body, Logo, NotesImg, GiallaImg } from "../styled/styled-advices.jsx";


const Advices = () => {
return (
<>
<Body>
<Logo src={LogoMafalda} alt="Logo"></Logo>
<NotesImg src={Notes} alt="Notes" />
<GiallaImg src={Gialla} alt="Gialla" />
</Body>
</>
);
};

export default Advices;
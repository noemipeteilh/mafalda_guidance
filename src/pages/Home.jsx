import React from "react";
import Button from "../components/Button.jsx";
import Since from "../assets/images/Since_1.png";
import { Body, Name, Title, Title1, Img } from "../styled/styled-home.jsx";

const Home = () => {
return (
        <>
<Body>
<Img src={Since} alt="Since"></Img>
<Name>MAFALDA</Name>
<Title>ORIENTACIÓN EN </Title>
<Title1>SALUD MENTAL INFANTIL</Title1>
<Button
        to="/parameters"
        nameButton="COMENZAR"
        backgroundColor="#FFFF"
        textColor="#Ff914d"
/>
</Body>
</>
);
};

export default Home;
import styled from "styled-components";
import Notes from "../assets/images/Notes.png";
import Gialla from "../assets/images/Gialla.png";

export const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 100vh;
text-align: center;
background-color: #ff914d;
color: white;
padding: 20px;
box-sizing: border-box;
margin:0;

@media (max-width: 768px) {
}
`;


export const Logo = styled.img`
width: 60px;
height: auto;
position: fixed;
top: 10px;
right: 20px;
`;

export const NotesImg = styled.img`
width: 400px;
height: auto;
margin-top: 20px;
`;

export const GiallaImg = styled.img`
width: 320px;
height: auto;
margin-botom: 10px;
`;

export const Img = styled.img`
width: 80px;
height: auto;
`;

export const Back = styled.img`
width: 80px;
height: auto;
position: fixed;
top: 0;
left: 5px;
`;
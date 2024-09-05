import styled from "styled-components";


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

export const Img = styled.img`
height: 50%; 
width: 100%; 
object-fit: contain;
margin-bottom: 10px;

`;


export const Name = styled.p`
font-size: 70px;
color: #F00000;
margin-bottom: 20px;
font-family: 'Staatliches', sans-serif;
margin-top: 0px;
text-transform: uppercase;
`;

export const Title = styled.p`
font-size: 30px;
font-family: 'Staatliches', sans-serif;
margin-top: 10px; /* Reducir espacio superior */
margin-bottom: 20px;
`;

export const Title1 = styled.p`
font-size: 30px;
  margin-top: 10px; /* Reducir margen superior */
font-family: 'Staatliches', sans-serif;
  margin-bottom: 20px; /* Reducir margen inferior */
`;



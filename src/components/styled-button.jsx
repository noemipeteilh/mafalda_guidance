import styled from "styled-components";
import { Link } from 'react-router-dom'; 



export const But = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ backgroundColor }) => backgroundColor || '#Ff914d'}; 
color: ${({ textColor }) => textColor || '#fff'}; 
font-size: 24px !important;
font-weigth:700;
border: none;
border-radius: 50;
padding: 24px 24px;
width: 100%;
max-width: 350px;
min-width: 200px;
height: auto;
cursor: pointer;
text-decoration: none;
transition: background-color 0.3s;
font-family: "Inter", sans-serif !important;
margin-bottom: 100px;
gap:10px;

img {
margin-right: ${(props) => (props.hasIcon ? '10px' : '0')};
width: 20px;
height: 20px;
}
`;





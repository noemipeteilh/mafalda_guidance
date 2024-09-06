import styled from 'styled-components';
import Padres from '../assets/images/Padres.png'; 

export const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
height: 100vh;
width: 100%;
background-image: url(${Padres});
background-size: cover; 
background-position: center; 
background-repeat: no-repeat;
background-color: transparent; 
margin: 0;
padding: 0;
box-sizing: border-box;
`;

export const Logo = styled.img`
width: 60px;
height: auto;
position: fixed;
top: 10px;
right: 20px;
`;

export const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
width: 300px;
gap: 20px;
margin: 0;
`;

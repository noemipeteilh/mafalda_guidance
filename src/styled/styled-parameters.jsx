import styled from 'styled-components';



export const Body = styled.div`
display: flex;
flex-direction: column;
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
width: 70px;
height: auto;
position: fixed;
top: 10px;
right: 20px;
`;

export const Title = styled.p`
font-size: 64px;
font-family: 'Staatliches', sans-serif;
margin-top: 50px; 
margin-bottom: 20px;
`;

export const Title1 = styled.p`
font-size: 50px;
font-family: 'Staatliches', sans-serif;
margin-top: 10px; 
margin-bottom: 20px;
`;

export const Title2 = styled.p`
font-size: 50px;
font-family: 'Staatliches', sans-serif;
margin-top: 10px; 
margin-bottom: 20px;
`;

export const Img = styled.img`
width: 200px;
height: auto;
object-fit: cover;
margin: 10px;
cursor: pointer; 
`;
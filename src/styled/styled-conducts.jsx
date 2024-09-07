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
width: 60px;
height: auto;
position: fixed;
top: 10px;
right: 20px;
`;

export const Title = styled.p`
font-size: 50px;
font-family: 'Staatliches', sans-serif;
margin-top: 70px; 
margin-bottom: 10px;
`;


export const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: auto;
gap: 20px; 
margin-bottom: 30px;
margin-top: 30px;

`;

export const Img = styled.img`
width: 200px;
height: auto;
object-fit: cover;
margin: 0;
position: fixed; 
bottom: 0;      
right: 130px;  

`;

export const Back = styled.img`
width: 60px;
height: auto;
position: fixed;
top: 10px;
left: 20px;
`;
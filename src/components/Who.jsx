import React from 'react'
import styled from 'styled-components'

//CUBO e configuracoes dele do Test.jsx
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Cube from './cube';

 
//css
const Right = styled.div`
flex:1;
position: relative;
display: flex;
flex-direction:column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 768px) {
  align-items: center;
  text-align: center;
}
`;
const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;
const Container = styled.div`
height: 100vh;
scroll-snap-align:center;
width: 1000px;
display: flex;
justify-content: space-between;
`;
const Left = styled.div`
flex: 1;

@media only screen and (max-width: 768px) {
  display: none;
}

`;
const Title = styled.h1`
font-size: 74px;
@media only screen and (max-width: 768px) {
  font-size: 60px;
}
`;
const WhatWeDo = styled.div`
display:flex;
align-items: center ;
gap:10px;
`;
const Line = styled.img`
height: 5px;
`;
const Subtitle = styled.h2`
color: #da4ea2;
`;
const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;
const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight:500;
width: 120px;
padding: 10px;
border-radius: 5px;
cursor: pointer;
`;




//HTML 
const Who = () => {
  const scrollToWorks = () =>{
    const whoSection = document.getElementById('Works');
    whoSection.scrollIntoView({ behavior:'smooth'});
  }


  return (
    <Section id="who">
      <Container>
        <Left>

        <Canvas camera={{fov:25, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
      </Canvas>

        </Left>
        <Right>
           <Title>Pense fora do Quadrado!</Title>
           <WhatWeDo>
             <Line src="./img/line.png"/>
             <Subtitle> Quem sou eu</Subtitle>
           </WhatWeDo>
          <Desc>Um Desenvolvedor Full-stack com paixão pela arte.</Desc>
          <Button onClick={scrollToWorks}>Veja meus Projetos</Button>
                          
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
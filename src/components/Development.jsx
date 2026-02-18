import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Atom from "./Atom"
import styled from 'styled-components'


const Desc = styled.div`
width: 160px;
height: 50px;
padding: 18px;
background-color: white;
border-radius: 10px;
position: absolute;
bottom: 80px;
right: 100px;
font-weight:401;

@media only screen and (max-width: 768px){
  top:0;
  bottom: 0;
  left: 0 ;
  right:0;
  margin: auto;
}

`;

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.6}>
          <Atom/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4}/>
      </Canvas>
      <Desc>Softwares multiplataforma e servidores, focados em desempenho e integração.</Desc>
    </>
  );
};

export default Development
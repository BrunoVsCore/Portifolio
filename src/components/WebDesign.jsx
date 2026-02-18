import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Mac from './Mac';
import styled from "styled-components";

const Desc = styled.div`
width: 160px;
height: 50px;
padding: 18px;
background-color: white;
border-radius: 10px;
position: absolute;
top: 80px;
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

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}> 
          <Mac/>
        </Stage>
        <OrbitControls enableZoom={false}/>
      </Canvas>
      <Desc>Produtos com forte foco em design de classe mundial e garantindo que seu produto seja um sucesso de mercado.</Desc>
    </>
  );
};

export default WebDesign
import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Shoe from "./Shoe"
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

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage enviroment="city" intensity={0.6}>
        <Shoe/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4}/>
      </Canvas>
      <Desc>Designs de produto funcionais e inovadores, focados em experiência e estética.</Desc>
    </>
    
  )
}

export default ProductDesign
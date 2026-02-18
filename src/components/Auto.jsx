

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Portifolio/Auto-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.palette} rotation={[Math.PI / 2, 0, 1.6]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['palette.001']} rotation={[Math.PI / 2, 0, 1.6]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['palette.002']} rotation={[Math.PI / 2, 0, 1.6]} />
    </group>
  )
}

useGLTF.preload('/Portifolio/Auto-transformed.glb')

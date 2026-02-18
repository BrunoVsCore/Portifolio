import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Portifolio/Ilustra-transformed.glb')
  return (
    <group {...props} dispose={null}>
      {/* Ajuste a rotação no eixo Y para girar o objeto */}
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} rotation={[0, Math.PI / -1.6, 0]} />
    </group>
  )
}

useGLTF.preload('/Portifolio/Ilustra-transformed.glb')

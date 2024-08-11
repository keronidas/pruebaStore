// import { useState } from 'react'
import './MyCanvas.css'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, useGLTF, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { Overlay } from './Overlay'
function MyCanvas({ position = [0, 0, 2.5], fov = 65 }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Canvas
        shadows
        eventSource={document.getElementById('root')}
        eventPrefix='client'
        camera={{ position, fov }}>
        <ambientLight intensity={0.1} />
        <Environment preset='city' />
        <Center>
          <Mobile />
          {/* <Backdrop /> */}
        </Center>
        <OrbitControls />
      </Canvas>
    </>
  )
}

function Mobile(props) {
  const { nodes, materials } = useGLTF('/Phone.glb')
  return (
    <group {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Cel}
        position={[0, 0.008, 0]}
        scale={[0.944, 0.741, 0.932]}
      />
      <group position={[0, 0.075, -1.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Cel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Camara}
        />
      </group>
      <group position={[0, 0.073, 0.654]} scale={[2.149, 1.245, 2.149]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Cel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.Camara}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials.Blanco}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Emission.geometry}
        material={materials.Emission}
        position={[0, 0.008, 0]}
        scale={[1, 0.741, 0.932]}
      />
    </group>
  )
}
// function Backdrop() {
//   return (
//     <AccumulativeShadows
//       temporal
//       frames={60}
//       alphaTest={0.85}
//       scale={10}
//       rotation={[-Math.PI / 2, 0, 0]}
//       position={[0, 0, -0.14]}
//     >
//       <RandomizedLight
//       amount={4}
//       radius={9}
//       intensity={0.55}
//       ambient={0.25}
//       position={[5,5,-10]}
//       />
//       <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[-5, 5, -10]} />
//     </AccumulativeShadows>
//   )
// }

useGLTF.preload('/Phone.glb')

export default MyCanvas

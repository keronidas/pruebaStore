// import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App({ position = [-1, 0, 2.5], fov = 25 }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <Canvas camera={{ position, fov }}>
        <Mobile />
        <OrbitControls />
      </Canvas>
    </>
  )
}

function Mobile() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  )
}

export default App

import React, { useRef } from 'react';
import './MyCanvas.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, OrbitControls, useGLTF, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { state } from './Store';
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
import { easing } from 'maath';

function MyCanvas({ position = [0, 0, 2.5], fov = 65 }) {
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
  );
}

function Mobile(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/Phone.glb');

  // Verifica si el material existe antes de intentar acceder a sus propiedades
  if (materials && materials.Cel) {
    materials.Cel.color = new THREE.Color(snap.selectedColor);
  }

  useFrame((state, delta) => {
    if (materials && materials.lambert1) {
      easing.dampC(materials.lambert1.color, snap.selectedColor, 0.25, delta);
    }
  });

  return (
    <group {...props} dispose={null} rotation={[Math.PI / 2, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials ? materials.Cel : undefined}
        position={[0, 0.008, 0]}
        scale={[0.944, 0.741, 0.932]}
      />
      <group position={[0, 0.075, -1.017]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials ? materials.Cel : undefined}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials ? materials.Camara : undefined}
        />
      </group>
      <group position={[0, 0.073, 0.654]} scale={[2.149, 1.245, 2.149]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials ? materials.Cel : undefined}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials ? materials.Camara : undefined}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials ? materials.Blanco : undefined}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Emission.geometry}
        material={materials ? materials.Emission : undefined}
        position={[0, 0.008, 0]}
        scale={[1, 0.741, 0.932]}
      />
    </group>
  );
}


function Backdrop() {
  const shadows = useRef();

  useFrame((state, delta) =>
    easing.dampC(
      shadows.current.getMesh().material.color,
      state.selectedColor,
      0.25,
      delta
    )
  );

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}>
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 2], 0.25, delta);
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
}

useGLTF.preload('/Phone.glb');

export default MyCanvas;

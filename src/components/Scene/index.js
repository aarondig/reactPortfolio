import React, { useState, useRef } from "react";
import "./style.css";
import { Canvas, useFrame } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import {Physics, useSphere} from "use-cannon";

const Sphere = () => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [ 1, 1, 1],
    color: hovered ? "red" : "white",
  })

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  })


  return (
  <a.mesh 
  ref={mesh}
  onPointerOver={() => setHovered(true)}
  onPointerOut={() => setHovered(false)}
  onClick={() => setActive(!active)}
  scale={props.scale}
  >
    <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
    <a.meshStandardMaterial attach="material" color={props.color}/>
  </a.mesh>
  )
}

export default () => (
  <div id="scene">
    <Canvas style={{ background: "#171717" }}>
      <ambientLight intensity={0.3}/>
      <pointLight position={[10, 10, 5]} />
      <Sphere/>
    </Canvas>
    </div>
);
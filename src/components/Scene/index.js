import React, { useState, useRef, useMemo } from "react";
import "./style.css";
import * as THREE from "three";
import {
  Canvas,
  useFrame,
  useLoader,
  extend,
  useThree,
} from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { Physics, useBox } from "use-cannon";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "../../models/minifigure.glb";
// import Model from "../Model/index";

import JSONfont from "../../fonts/PeaceSans_Regular.json";
import TextScene from "../TextScene";

extend({ OrbitControls });

function Char() {
  // const [load, setLoad] = useState(false);
  const scene = useLoader(GLTFLoader, Model);
  // useMemo(() => setLoad(!load))
  console.log(scene);
  const [ref, api] = useBox(() => ({ args: 0.01, mass: 1 }));
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "red" : "white",
  });

  useFrame((state) => {
    // ref.current.rotation.set(0, state.mouse.x * state.viewport.width /80, 0)
    ref.current.rotation.set(
      0,
      9 + (state.mouse.x * state.viewport.width) / 80,
      0
    );
    ref.current.rotation.y += 0.001;

    ref.current.position.set(0, -2, 0);
  });

  return (
    <group>
      <a.mesh
        ref={ref}
        // onPointerOver={() => setHovered(true)}
        // onPointerOut={() => setHovered(false)}
        onClick={() => setActive(!active)}
        scale={props.scale}
      >
        {/* {load ? ( */}
        <primitive attach="map" object={scene.scene} dispose={null} />
        {/* ) : null} */}
        <a.meshStandardMaterial attach="material" color={props.color} />
      </a.mesh>
    </group>
  );
}

function TextMesh() {
  // const mesh = useRef();
  const [ref] = useBox(() => ({ mass: 3 }));
  useFrame((state) => {
    ref.current.geometry.center();
    ref.current.rotation.y += 0.001;
  });
  const font = new THREE.FontLoader().parse(JSONfont);

  const textOptions = {
    font,
    size: 0.5,
    height: 0.2,
  };
  // console.log(font)
  
  return (
    <group>
      <mesh ref={ref}>
        <textGeometry attach="geometry" args={["AARON", textOptions]} />
        <meshStandardMaterial attach="material" color={"white"} />
      </mesh>
      <mesh ref={ref}>
        <textGeometry attach="geometry" args={["DIGGDON", textOptions]} />
        <meshStandardMaterial attach="material" color={"white"} />
      </mesh>
    </group>
  );
}

function Orbit() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
}

export default () => (
  <div id="scene">
    <Canvas shadowMap>
      <ambientLight intensity={0.05} />

      <Orbit />
      <pointLight position={[20, 20, -5]} />
      <Physics gravity={[0, -10, 0]} iterations={10} defaultContactMaterial={{restitution: 1.1}}>
        <Char />

        <TextScene />
      </Physics>
    </Canvas>
  </div>
);

// function Sphere({args=[1, 1, 1]}) {
//   const [ref, api] = useSphere(() => ({ args: .5, mass: .5}))
//   const mesh = useRef();
//   const [hovered, setHovered] = useState(false);
//   const [active, setActive] = useState(false);
//   const props = useSpring({
//     scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
//     color: hovered ? "red" : "white",
//   });

//   useFrame(state => {
//     api.rotation.set(0, state.mouse.x, 0)
//     api.position.set(state.mouse.x * state.viewport.width / 2, 0, 0)
//   });

//   return (
//     <a.mesh
//       ref={ref}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//       onClick={() => setActive(!active)}
//       scale={props.scale}
//     >
//       <boxBufferGeometry attach="geometry" args={args} />
//       <a.meshStandardMaterial attach="material" color={props.color} />
//     </a.mesh>
//   );
// };

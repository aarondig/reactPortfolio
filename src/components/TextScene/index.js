import React, { useState, useRef, useMemo } from "react";
import "./style.css";
import * as THREE from "three";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
} from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { Physics, useBox, usePlane } from "use-cannon";

import JSONfont from "../../fonts/PeaceSans_Regular.json";

function Header() {
  const [ref, api] = useBox(() => ({ mass: 8 }));
  useFrame((state) => {
    ref.current.geometry.center();
    // api.position.set([0, 0, 2])
  });
  const font = new THREE.FontLoader().parse(JSONfont);

  const textOptions = {
    font,
    size: 0.5,
    height: 0.2,
  };
  
  return (
      <mesh ref={ref} castShadow>
        <textGeometry attach="geometry" args={["AARON", textOptions]} />
        <meshStandardMaterial attach="material" color={"white"} />
      </mesh>
  );
}

function SubHead() {
  const [ref, api] = useBox(() => ({ mass: 3 }));
  useFrame((state) => {
    ref.current.geometry.center();
   
  });
  const font = new THREE.FontLoader().parse(JSONfont);

  const textOptions = {
    font,
    size: 0.5,
    height: 0.2,
  };
  
  return (
      <mesh ref={ref}>
        <textGeometry attach="geometry" args={["DIGGDON", textOptions]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
  );
}

function Plane(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[5, 5]}/>
      <shadowMaterial attach="material" color="#171717" opacity={0.5} />
    </mesh>
  )
}

function TextScene() {
  
  return (
    <group>
      <Header />
      <SubHead />
      <Plane rotation={[-Math.PI / 2, 0, 0]}/>
    </group>
  );
}

export default () => (
        <TextScene />
);
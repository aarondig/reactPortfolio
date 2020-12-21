import React, { useState, useRef, useMemo } from "react";
import "./style.css";
import { Canvas, useFrame, useLoader, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";
import { Physics, useBox } from "use-cannon";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "../../models/minifigure.glb";
// import Model from "../Model/index";

extend({ OrbitControls });


function Char() {
  // const [load, setLoad] = useState(false);
  const scene = useLoader(GLTFLoader, Model);
  // useMemo(() => setLoad(!load)) 
  console.log(scene)
  const [ref, api] = useBox(() => ({ args: 0.01, mass: 1 }));
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "red" : "white",
  });

  useFrame((state) => {
    ref.current.rotation.set(0, 9 + state.mouse.x * state.viewport.width /80, 0)
    ref.current.rotation.y += 0.001;
    
    ref.current.position.set(0, -2, 0)
    // api.position.set(state.mouse.x * state.viewport.width / 2, 0, 0)
    // ref.current.position.set(0, state.viewport.height / 2, 0)
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

function Orbit(){
  const {camera, gl: {domElement},} = useThree();

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
}

export default () => (
  <div id="scene">
    <Canvas style={{ background: "#000" }} shadowMap>
      {/* <ambientLight intensity={0.3} /> */}
      <Orbit />
      <pointLight position={[20, 20, -5]} />
      <Physics gravity={[0, -10, 0]}>
        <Char />
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

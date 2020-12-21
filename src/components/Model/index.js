import React, { useState, useRef, Suspense, useMemo } from "react";
import "./style.css";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "../../models/figure.glb";

function MiniFig() {
  
  const scene = useLoader(GLTFLoader, Model)
  
  // useMemo(() => scene.traverse(obj => {
  //   // if (obj.isMesh) obj.material.side = THREE.DoubleSide;
    
  // }), [scene])
  console.log(scene);

  return <primitive object={scene.nodes.Low_Poly_Characte_000} dispose={null} />
}


export default () => <MiniFig />;


// function MiniFig() {
  
//   const { nodes } = useLoader(GLTFLoader, Model);
//   console.log(nodes);
//     return (
//       <group>
//           <skinnedMesh
//             attach="material"
            
//             geometry={nodes["stacy"].geometry}
//             skeleton={nodes["stacy"].skeleton}
//           >
//              <meshStandardMaterial color="red"
//             roughness={0.3}
//             metalness={0.3} />
//           </skinnedMesh>
//       </group>
//     );
// }

import React from "react";
import { OrbitControls } from "@react-three/drei";

function Light() {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />

      <directionalLight
        castShadow
        color="#8b8b8b"
        intensity={10}
        position={[10, 20, 15]}
        shadow-mapSize={[1024 * 4, 1024 * 4]}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-camera-left={-20}
        shadow-camera-right={20}
      />

      <directionalLight
        castShadow
        color="#ce746e"
        intensity={10}
        position={[20, 25, 5]}
        shadow-mapSize={[1024 * 4, 1024 * 4]}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
      />

      <group rotation={[1, 0.7, 5.25]}>
        <mesh position={[0, 33, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color={"#f35e5e"} />
        </mesh>
      </group>
    </>
  );
}

export default Light;

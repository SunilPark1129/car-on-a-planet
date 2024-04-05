import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Light() {
  const circleRef = useRef();
  const lightRef = useRef();

  const radius = 12;
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const theta = time * 0.22;
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);

    circleRef.current.position.set(x, y, y);
    lightRef.current.position.set(x, y, y);
  });

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />

      <directionalLight
        ref={lightRef}
        castShadow
        color="#8d7575"
        intensity={10}
        shadow-mapSize={[1024 * 5, 1024 * 5]}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
      />

      <group>
        <mesh position={[10, 10, 20]} ref={circleRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={"#b69593"} emissive={"#ddb6b6"} />
        </mesh>
      </group>
    </>
  );
}

export default Light;

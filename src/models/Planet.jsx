import React from "react";
import Rock from "./Rock";

function Planet() {
  return (
    <>
      <mesh receiveShadow position={[0, -10, 0]}>
        <sphereGeometry args={[10, 64, 32]} />
        <meshStandardMaterial color={"#b6b6b6"} flatShading />
        <Rock rotationY={9} rotationZ={3} />
        <Rock rotationY={5} rotationZ={5} />
        <Rock rotationY={5} rotationZ={8} />
        <Rock rotationY={10} rotationZ={8.5} />
        <Rock rotationY={45} rotationZ={30} />
        <Rock rotationY={50} rotationZ={38} />
        <Rock rotationY={50} rotationZ={18} />
        <Rock rotationY={10} rotationZ={24} />
        <Rock rotationY={50} rotationZ={33} />
        <Rock rotationY={3} rotationZ={8} />
      </mesh>
    </>
  );
}

export default Planet;

import React, { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
function CameraAnimation() {
  const { camera } = useThree();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!clicked) setClicked(true);
    }, 300);
  }, []);

  const target = new THREE.Vector3(-40, 10, 5);

  useFrame(() => {
    if (clicked) {
      const currentPosition = camera.position;
      const distance = currentPosition.distanceTo(target);

      if (distance > 0.1) {
        const direction = target.clone().sub(currentPosition);
        const step = direction.multiplyScalar(0.005);
        camera.position.add(step);
      } else {
        setClicked(false);
      }
    }
  });

  return <perspectiveCamera />;
}

export default CameraAnimation;

import React, { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
function CameraAnimation() {
  const { camera } = useThree();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) {
      const animationId = requestAnimationFrame(animate);
      const target = new THREE.Vector3(-40, 10, 5);
      function animate() {
        const currentPosition = camera.position;
        const distance = currentPosition.distanceTo(target);

        if (distance > 2) {
          const direction = target.clone().sub(currentPosition);
          const step = direction.multiplyScalar(0.005);
          camera.position.add(step);
          requestAnimationFrame(animate);
        } else {
          setClicked(false);
          cancelAnimationFrame(animationId);
        }
      }
    }
  }, []);

  return <perspectiveCamera />;
}

export default CameraAnimation;

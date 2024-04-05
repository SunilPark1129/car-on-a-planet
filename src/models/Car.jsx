/**
 *
 * Created model by Sunil Park
 *
 */

import React, { useEffect, useRef } from "react";
import useMovement from "../utilities/useMovement";
import { DoubleSide } from "three";

function Car({ pointerKeys }) {
  const carFowardBack = useRef();
  const carLeftRight = useRef();

  useMovement({
    carFowardBack,
    carLeftRight,
    pointerKeys,
  });

  // car engine shake
  useEffect(() => {
    let trigger = false;
    setInterval(() => {
      if (trigger) {
        carFowardBack.current.position.y = 0.05;
        trigger = false;
      } else {
        carFowardBack.current.position.y = 0;
        trigger = true;
      }
    }, 150);
  }, []);

  return (
    <>
      <group position={[0, -10, 0]}>
        <group dispose={null} ref={carFowardBack}>
          <group
            ref={carLeftRight}
            rotation={[Math.PI, 0, Math.PI]}
            position={[0, 10.2, 0]}
          >
            <group castShadow receiveShadow>
              <group position-y={0}>
                {/*------------------------------ tier ------------------------------ */}

                <mesh
                  position-y={0.1}
                  rotation-z={(Math.PI * 90) / 180}
                  rotation-y={(Math.PI * -90) / 180}
                  castShadow
                  receiveShadow
                >
                  <boxGeometry args={[0.2, 2, 1]} />
                  <meshStandardMaterial color={"#2e2e2e"} />
                </mesh>

                <mesh
                  position-z={-0.6}
                  rotation-y={(Math.PI * 90) / 180}
                  position-x={0.5}
                  castShadow
                  receiveShadow
                >
                  <torusGeometry args={[0.3, 0.1, 10, 32, Math.PI]} />
                  <meshStandardMaterial color={"#2e2e2e"} />
                  <mesh position-z={-0.05}>
                    <torusGeometry args={[0.15, 0.13, 8, 100]} />
                    <meshStandardMaterial color={"#2e2e2e"} roughness={1} />
                  </mesh>
                </mesh>

                <mesh
                  position-z={0.6}
                  position-x={0.5}
                  rotation-y={(Math.PI * -90) / 180}
                  castShadow
                  receiveShadow
                >
                  <torusGeometry args={[0.3, 0.1, 10, 32, Math.PI]} />
                  <meshStandardMaterial color={"#2e2e2e"} />
                  <mesh position-z={0.05}>
                    <torusGeometry args={[0.15, 0.13, 8, 100]} />
                    <meshStandardMaterial color={"#2e2e2e"} roughness={1} />
                  </mesh>
                </mesh>

                <mesh
                  position-z={-0.6}
                  position-x={-0.5}
                  rotation-y={(Math.PI * 90) / 180}
                  castShadow
                  receiveShadow
                >
                  <torusGeometry args={[0.3, 0.1, 10, 32, Math.PI]} />
                  <meshStandardMaterial color={"#2e2e2e"} />
                  <mesh position-z={0.05}>
                    <torusGeometry args={[0.15, 0.13, 8, 100]} />
                    <meshStandardMaterial color={"#2e2e2e"} roughness={1} />
                  </mesh>
                </mesh>

                <mesh
                  position-z={0.6}
                  position-x={-0.5}
                  rotation-y={(Math.PI * -90) / 180}
                  castShadow
                  receiveShadow
                >
                  <torusGeometry args={[0.3, 0.1, 10, 32, Math.PI]} />
                  <meshStandardMaterial color={"#2e2e2e"} />
                  <mesh position-z={-0.05}>
                    <torusGeometry args={[0.15, 0.13, 8, 100]} />
                    <meshStandardMaterial color={"#2e2e2e"} roughness={1} />
                  </mesh>
                </mesh>
              </group>
              <mesh position={[0, 0.35, 0.2]} castShadow receiveShadow>
                <boxGeometry args={[0.9, 0.3, 1.4]} />
                <meshStandardMaterial color={"#ad9e58"} />

                {/* ------------------------------ wall ------------------------------ */}

                <mesh position={[0.4, 0.3, -0.625]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 0.4, 0.15]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>
                <mesh position={[-0.4, 0.3, -0.625]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 0.4, 0.15]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>

                <mesh position={[0.4, 0.3, 0]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 0.4, 0.1]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>
                <mesh position={[-0.4, 0.3, 0]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 0.4, 0.1]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>

                <mesh position={[0.4, 0.3, 0.625]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 0.4, 0.15]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>
                <mesh position={[-0.4, 0.3, 0.625]} castShadow receiveShadow>
                  <boxGeometry args={[0.1, 0.4, 0.15]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>

                <mesh position-y={0.46} castShadow receiveShadow>
                  <boxGeometry args={[0.9, 0.08, 1.4]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>

                {/* ------------------------------ glass ------------------------------ */}

                <mesh
                  position={[0.455, 0.3, 0.3]}
                  rotation={[0, (Math.PI * 90) / 180, 0]}
                >
                  <planeGeometry args={[0.55, 0.3]} />
                  <meshPhysicalMaterial
                    color={"#717e80"}
                    side={DoubleSide}
                    opacity={0.5}
                    transmission={1}
                    thickness={0.1}
                    ior={2.33}
                    transparent
                  />
                </mesh>
                <mesh
                  position={[0.455, 0.3, -0.3]}
                  rotation={[0, (Math.PI * 90) / 180, 0]}
                >
                  <planeGeometry args={[0.55, 0.3]} />
                  <meshPhysicalMaterial
                    color={"#717e80"}
                    opacity={0.5}
                    side={DoubleSide}
                    transmission={1}
                    thickness={0.1}
                    ior={2.33}
                    transparent
                  />
                </mesh>

                <mesh
                  position={[-0.455, 0.3, 0.3]}
                  rotation={[0, (Math.PI * -90) / 180, 0]}
                >
                  <planeGeometry args={[0.55, 0.3]} />
                  <meshPhysicalMaterial
                    color={"#717e80"}
                    opacity={0.5}
                    side={DoubleSide}
                    transmission={1}
                    thickness={0.1}
                    ior={2.33}
                    transparent
                  />
                </mesh>
                <mesh
                  position={[-0.455, 0.3, -0.3]}
                  rotation={[0, (Math.PI * -90) / 180, 0]}
                >
                  <planeGeometry args={[0.55, 0.3]} />
                  <meshPhysicalMaterial
                    color={"#717e80"}
                    opacity={0.5}
                    side={DoubleSide}
                    transmission={1}
                    thickness={0.1}
                    ior={2.33}
                    transparent
                  />
                </mesh>

                <mesh
                  position={[0, 0.3, -0.705]}
                  rotation={[0, (Math.PI * 180) / 180, 0]}
                >
                  <planeGeometry args={[0.8, 0.3]} />
                  <meshPhysicalMaterial
                    color={"#717e80"}
                    opacity={0.5}
                    side={DoubleSide}
                    transmission={1}
                    thickness={0.1}
                    ior={2.33}
                    transparent
                  />
                </mesh>
                <mesh position={[0, 0.3, 0.705]} rotation={[0, 0, 0]}>
                  <planeGeometry args={[0.8, 0.3]} />
                  <meshPhysicalMaterial
                    color={"#717e80"}
                    opacity={0.5}
                    side={DoubleSide}
                    transmission={1}
                    thickness={0.1}
                    ior={2.33}
                    transparent
                  />
                </mesh>
              </mesh>

              {/* ------------------------------ light ------------------------------ */}

              <mesh
                position={[-0.325, 0.35, -0.951]}
                rotation={[0, (Math.PI * 180) / 180, 0]}
              >
                <planeGeometry args={[0.25, 0.1]} />
                <meshStandardMaterial color={"#ffffff"} />
              </mesh>

              <mesh position={[-0.325, 0.35, 0.905]} rotation={[0, 0, 0]}>
                <planeGeometry args={[0.25, 0.1]} />
                <meshStandardMaterial color={"#910404"} />
              </mesh>
              <mesh position={[0.325, 0.35, 0.905]} rotation={[0, 0, 0]}>
                <planeGeometry args={[0.25, 0.1]} />
                <meshStandardMaterial color={"#910404"} />
              </mesh>

              <mesh
                position={[0.325, 0.35, -0.955]}
                rotation={[0, (Math.PI * 180) / 180, 0]}
              >
                <planeGeometry args={[0.25, 0.1]} />
                <meshBasicMaterial color={"#ffffff"} />
                <pointLight castShadow color={"#ffffff"} intensity={0.5} />
              </mesh>
              <mesh
                position={[-0.325, 0.35, -0.955]}
                rotation={[0, (Math.PI * 180) / 180, 0]}
              >
                <planeGeometry args={[0.25, 0.1]} />
                <meshBasicMaterial color={"#ffffff"} />
                <pointLight castShadow color={"#ffffff"} intensity={0.5} />
              </mesh>

              {/* ------------------------------ door handle ------------------------------ */}

              <mesh
                position={[0.453, 0.45, 0.05]}
                rotation={[0, (Math.PI * 90) / 180, 0]}
              >
                <planeGeometry args={[0.2, 0.05]} />
                <meshStandardMaterial color={"#2e2e2e"} />
              </mesh>
              <mesh
                position={[0.453, 0.45, 0.35]}
                rotation={[0, (Math.PI * 90) / 180, 0]}
              >
                <planeGeometry args={[0.2, 0.05]} />
                <meshStandardMaterial color={"#2e2e2e"} />
              </mesh>

              <mesh
                position={[-0.453, 0.45, 0.05]}
                rotation={[0, (Math.PI * -90) / 180, 0]}
              >
                <planeGeometry args={[0.2, 0.05]} />
                <meshStandardMaterial color={"#2e2e2e"} />
              </mesh>
              <mesh
                position={[-0.453, 0.45, 0.35]}
                rotation={[0, (Math.PI * -90) / 180, 0]}
              >
                <planeGeometry args={[0.2, 0.05]} />
                <meshStandardMaterial color={"#2e2e2e"} />
              </mesh>

              {/* ------------------------------ inside ------------------------------ */}

              <mesh position={[-0.2, 0.5, -0.3]}>
                <torusGeometry args={[0.1, 0.02]} />
                <meshBasicMaterial color={"#2e2e2e"} />
              </mesh>

              <mesh position={[-0.2, 0.55, 0.05]} rotation-x={0.3}>
                <boxGeometry args={[0.25, 0.3, 0.05]} />
                <meshBasicMaterial color={"#2e2e2e"} />
              </mesh>
              <mesh position={[0.2, 0.55, 0.05]} rotation-x={0.3}>
                <boxGeometry args={[0.25, 0.3, 0.05]} />
                <meshBasicMaterial color={"#2e2e2e"} />
              </mesh>

              <mesh position={[-0.2, 0.55, 0.6]} rotation-x={0.3}>
                <boxGeometry args={[0.25, 0.3, 0.05]} />
                <meshBasicMaterial color={"#2e2e2e"} />
              </mesh>
              <mesh position={[0.2, 0.55, 0.6]} rotation-x={0.3}>
                <boxGeometry args={[0.25, 0.3, 0.05]} />
                <meshBasicMaterial color={"#2e2e2e"} />
              </mesh>

              <mesh
                position={[0, 0.25, -0.955]}
                rotation={[0, (Math.PI * 180) / 180, 0]}
              >
                <planeGeometry args={[0.4, 0.15]} />
                <meshStandardMaterial color={"#2e2e2e"} />
              </mesh>

              <mesh position={[0, 0.3, -0.7]} castShadow receiveShadow>
                <boxGeometry args={[0.9, 0.2, 0.5]} />
                <meshStandardMaterial color={"#ad9e58"} />

                {/* ------------------------------ other ------------------------------ */}

                <mesh
                  position={[0, 0.15, 0.2]}
                  rotation={[0, (Math.PI * 45) / 180, 0]}
                  castShadow
                  receiveShadow
                >
                  <cylinderGeometry args={[0.5, 0.635, 0.1, 4, 1]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                </mesh>

                <mesh position={[0, 0.1, 1.7]} castShadow receiveShadow>
                  <torusGeometry args={[0.15, 0.13, 8, 100]} />
                  <meshStandardMaterial color={"#2e2e2e"} roughness={1} />
                </mesh>

                <mesh position={[0.3, -0.25, 1.7]}>
                  <boxGeometry args={[0.1, 0.05, 0.05]} />
                  <meshBasicMaterial color={"#2e2e2e"} />
                </mesh>

                {/* ------------------------------ wifer ------------------------------ */}

                <mesh position={[0.125, 0.22, 0.18]} rotation-z={0.05}>
                  <boxGeometry args={[0.3, 0.01, 0.01]} />
                  <meshBasicMaterial color={"#2e2e2e"} />
                </mesh>
                <mesh position={[-0.125, 0.22, 0.18]} rotation-z={0.05}>
                  <boxGeometry args={[0.3, 0.01, 0.01]} />
                  <meshBasicMaterial color={"#2e2e2e"} />
                </mesh>

                {/* ------------------------------ side mirror ------------------------------ */}

                <mesh
                  position={[-0.5, 0.15, 0.3]}
                  rotation-y={0.2}
                  castShadow
                  receiveShadow
                >
                  <boxGeometry args={[0.1, 0.1, 0.03]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                  <mesh position={[0.975, 0, 0.214]} rotation-y={-0.4}>
                    <planeGeometry args={[0.08, 0.08]} />
                    <meshStandardMaterial
                      color={"#383b3b"}
                      roughness={0.1}
                      metalness={0.5}
                    />
                  </mesh>
                </mesh>

                <mesh
                  position={[0.5, 0.15, 0.3]}
                  rotation-y={-0.2}
                  castShadow
                  receiveShadow
                >
                  <boxGeometry args={[0.1, 0.1, 0.03]} />
                  <meshStandardMaterial color={"#ad9e58"} />
                  <mesh position={[-0.975, 0, 0.214]} rotation-y={0.4}>
                    <planeGeometry args={[0.08, 0.08]} />
                    <meshStandardMaterial
                      color={"#383b3b"}
                      roughness={0.1}
                      metalness={0.5}
                    />
                  </mesh>
                </mesh>
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

export default Car;

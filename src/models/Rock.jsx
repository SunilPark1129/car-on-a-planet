export default function Rock({ rotationY, rotationZ }) {
  return (
    <group rotation-y={rotationY} rotation-z={rotationZ}>
      <group position-y={9.88}>
        <mesh receiveShadow>
          <cylinderGeometry args={[0.5, 2, 0.5, 8]} />
          <meshStandardMaterial emissive={"#080808"} color={"#adadad"} />
        </mesh>
        <mesh
          receiveShadow
          position={[1.5, -0.05, 1]}
          rotation={[0.5, 1.2, -0.4]}
        >
          <cylinderGeometry args={[0.2, 0.5, 0.1, 10]} />
          <meshStandardMaterial emissive={"#080808"} color={"#adadad"} />
        </mesh>
      </group>
    </group>
  );
}

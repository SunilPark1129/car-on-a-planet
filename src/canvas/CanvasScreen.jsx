import React from "react";
import { Canvas } from "@react-three/fiber";
import Light from "../models/Light";
import Car from "../models/Car";
import Planet from "../models/Planet";
import CameraAnimation from "./camera/CameraAnimation";

function CanvasScreen({ movementKey }) {
  // convert user's pointer key values to array type
  const keys = Object.entries(movementKey)
    .filter(([_, bool]) => bool)
    .map(([item]) => item);

  return (
    <Canvas shadows camera={{ position: [10, -50, 30] }}>
      <CameraAnimation />
      <Light />
      <Car pointerKeys={keys} />
      <Planet />
    </Canvas>
  );
}

export default CanvasScreen;

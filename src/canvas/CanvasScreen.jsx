import React from "react";
import { Canvas } from "@react-three/fiber";
import Light from "../models/Light";
import Car from "../models/Car";
import Planet from "../models/Planet";

function CanvasScreen() {
  return (
    <Canvas shadows camera={{ position: [-10, 20, 15], zoom: 1.5 }}>
      <Light />
      <Car />
      <Planet />
    </Canvas>
  );
}

export default CanvasScreen;

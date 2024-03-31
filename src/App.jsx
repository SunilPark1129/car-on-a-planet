/**
 * Created project by Sunil Park
 * - Car on a planet
 * - a simple R3F 3D project
 */

import { useState } from "react";
import "./App.css";
import CanvasScreen from "./canvas/CanvasScreen";
import Keyboard from "./components/Keyboard";
import DisplayKeyboard from "./components/DisplayKeyboard";

function App() {
  const [movementKey, setMovementKey] = useState(null);
  const [isDisplaying, setIsDisplaying] = useState(false);
  function pointerDownHandler(key) {
    setMovementKey(key);
  }
  function pointerOutHandler() {
    setMovementKey(null);
  }
  return (
    <div className="App">
      <CanvasScreen movementKey={movementKey} />
      <DisplayKeyboard
        isDisplaying={isDisplaying}
        setIsDisplaying={setIsDisplaying}
      />
      <Keyboard
        isDisplaying={isDisplaying}
        movementKey={movementKey}
        pointerDownHandler={pointerDownHandler}
        pointerOutHandler={pointerOutHandler}
      />
    </div>
  );
}

export default App;

/**
 * Created project by Sunil Park
 * - Car on a planet
 * - a simple R3F 3D project
 */

import { useEffect, useState } from "react";
import "./App.css";
import CanvasScreen from "./canvas/CanvasScreen";
import Keyboard from "./components/Keyboard";
import DisplayKeyboard from "./components/DisplayKeyboard";

function App() {
  const [movementKey, setMovementKey] = useState([]);
  const [isDisplaying, setIsDisplaying] = useState(false);
  function pointerDownHandler(key) {
    if (!movementKey.includes(key)) {
      setMovementKey((prev) => [...prev, key]);
    }
  }
  function pointerOutHandler(key) {
    const keys = movementKey.filter((item) => item !== key);
    setMovementKey(keys);
  }

  return (
    <div className="App">
      <CanvasScreen />
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
      <div className="test">
        {movementKey.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

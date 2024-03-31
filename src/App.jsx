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
  const [movementKey, setMovementKey] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });
  const [isDisplaying, setIsDisplaying] = useState(false);
  function pointerDownHandler(key) {
    setMovementKey((prev) => ({ ...prev, [key]: true }));
  }
  function pointerLeaveHandler(key) {
    // const keys = movementKey.filter((item) => item !== key);
    setMovementKey((prev) => ({ ...prev, [key]: false }));
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
        pointerLeaveHandler={pointerLeaveHandler}
      />
      <div className="test">
        {Object.entries(movementKey)
          .filter(([key, bool]) => bool)
          .map((item) => (
            <p key={item}>{item}</p>
          ))}
      </div>
    </div>
  );
}

export default App;

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
import Manual from "./components/Manual";

function App() {
  // state for user pointer values (for mobile)
  const [movementKey, setMovementKey] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  // display keyboard
  const [isDisplayingKeyboard, setIsDisplayingKeyboard] = useState(false);

  function pointerDownHandler(key) {
    setMovementKey((prev) => ({ ...prev, [key]: true }));
  }
  function pointerLeaveHandler(key) {
    setMovementKey((prev) => ({ ...prev, [key]: false }));
  }

  return (
    <div className="App">
      <CanvasScreen movementKey={movementKey} />
      <DisplayKeyboard
        isDisplayingKeyboard={isDisplayingKeyboard}
        setIsDisplayingKeyboard={setIsDisplayingKeyboard}
      />
      <Keyboard
        isDisplayingKeyboard={isDisplayingKeyboard}
        movementKey={movementKey}
        pointerDownHandler={pointerDownHandler}
        pointerLeaveHandler={pointerLeaveHandler}
      />
      <Manual />
    </div>
  );
}

export default App;

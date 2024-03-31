import React from "react";

function Keyboard({
  isDisplaying,
  movementKey,
  pointerDownHandler,
  pointerOutHandler,
}) {
  return (
    <div className={`keyboard ${!isDisplaying && "keyboard--none"}`}>
      <div className="keyboard__top">
        <div
          className={`keyboard__key ${
            movementKey === "w" && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("w")}
          onPointerOut={pointerOutHandler}
        >
          W
        </div>
      </div>
      <div className="keyboard__bottom">
        <div
          className={`keyboard__key ${
            movementKey === "a" && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("a")}
          onPointerOut={pointerOutHandler}
        >
          A
        </div>
        <div
          className={`keyboard__key ${
            movementKey === "s" && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("s")}
          onPointerOut={pointerOutHandler}
        >
          S
        </div>
        <div
          className={`keyboard__key ${
            movementKey === "d" && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("d")}
          onPointerOut={pointerOutHandler}
        >
          D
        </div>
      </div>
    </div>
  );
}

export default Keyboard;

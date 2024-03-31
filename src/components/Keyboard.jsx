import React from "react";

function Keyboard({
  isDisplaying,
  movementKey,
  pointerDownHandler,
  pointerLeaveHandler,
}) {
  return (
    <div className={`keyboard ${!isDisplaying && "keyboard--none"}`}>
      <div className="keyboard__top">
        <div
          className={`keyboard__key ${
            movementKey.w && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("w")}
          onPointerLeave={() => pointerLeaveHandler("w")}
        >
          W
        </div>
      </div>
      <div className="keyboard__bottom">
        <div
          className={`keyboard__key ${
            movementKey.a && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("a")}
          onPointerLeave={() => pointerLeaveHandler("a")}
        >
          A
        </div>
        <div
          className={`keyboard__key ${
            movementKey.s && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("s")}
          onPointerLeave={() => pointerLeaveHandler("s")}
        >
          S
        </div>
        <div
          className={`keyboard__key ${
            movementKey.d && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("d")}
          onPointerLeave={() => pointerLeaveHandler("d")}
        >
          D
        </div>
      </div>
    </div>
  );
}

export default Keyboard;

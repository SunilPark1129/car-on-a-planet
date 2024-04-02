import React from "react";

function Arrow({ pos }) {
  return (
    <svg
      style={{ transform: `rotateZ(${pos}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M16 9l-4 -4" />
      <path d="M8 9l4 -4" />
    </svg>
  );
}

function Keyboard({
  isDisplayingKeyboard,
  movementKey,
  pointerDownHandler,
  pointerLeaveHandler,
}) {
  return (
    <div className={`keyboard ${!isDisplayingKeyboard && "keyboard--none"}`}>
      <div className="keyboard__top">
        <div
          className={`keyboard__key ${
            movementKey.w && "keyboard__key--active"
          }`}
          onPointerDown={(e) => pointerDownHandler(e, "w")}
          onPointerUp={(e) => pointerLeaveHandler(e, "w")}
        >
          <Arrow pos={0} />
        </div>
        <div
          className={`keyboard__key ${
            movementKey.s && "keyboard__key--active"
          }`}
          onPointerDown={(e) => pointerDownHandler(e, "s")}
          onPointerUp={(e) => pointerLeaveHandler(e, "s")}
        >
          <Arrow pos={180} />
        </div>
      </div>
      <div className="keyboard__bottom">
        <div
          className={`keyboard__key ${
            movementKey.a && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("a")}
          onPointerUp={() => pointerLeaveHandler("a")}
        >
          <Arrow pos={-90} />{" "}
        </div>
        <div
          className={`keyboard__key ${
            movementKey.d && "keyboard__key--active"
          }`}
          onPointerDown={() => pointerDownHandler("d")}
          onPointerUp={() => pointerLeaveHandler("d")}
        >
          <Arrow pos={90} />
        </div>
      </div>
    </div>
  );
}

export default Keyboard;

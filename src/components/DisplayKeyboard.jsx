import React from "react";

function DisplayKeyboard({ isDisplaying, setIsDisplaying }) {
  function clickHandller() {
    setIsDisplaying((prev) => !prev);
  }
  return (
    <button
      className={`display-keyboard ${
        isDisplaying && "display-keyboard--active"
      }`}
      onClick={clickHandller}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
        <path d="M6 10l0 .01" />
        <path d="M10 10l0 .01" />
        <path d="M14 10l0 .01" />
        <path d="M18 10l0 .01" />
        <path d="M6 14l0 .01" />
        <path d="M18 14l0 .01" />
        <path d="M10 14l4 .01" />
      </svg>
    </button>
  );
}

export default DisplayKeyboard;

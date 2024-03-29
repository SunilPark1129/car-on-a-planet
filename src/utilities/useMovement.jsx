import React, { useEffect } from "react";

let timer;

function useMovement({
  moveDirection,
  moveAngle,
  carFowardBack,
  carLeftRight,
}) {
  useEffect(() => {
    // car's acceleration
    let acc = 0;

    // keys for user keydown handler
    // it can store 2 keys
    let keys = [];

    const handleKeyDown = (event) => {
      // speed
      const rotationAngle = Math.PI / (100 - acc);

      const { key } = event;

      // store the key value
      if (keys.length === 0 || keys[0] === key) {
        keys[0] = key;
      } else {
        keys[1] = key;
      }

      // set movement
      if (keys[0] === "w" || keys[1] === "w") {
        caseW();
      }
      if (keys[0] === "s" || keys[1] === "s") {
        caseS();
      }
      if (keys[0] === "a" || keys[1] === "a") {
        caseA();
      }
      if (keys[0] === "d" || keys[1] === "d") {
        caseD();
      }

      function caseW() {
        if (acc < 60) {
          acc = acc + 1;
        }
        carFowardBack.current.rotateOnAxis(moveDirection, rotationAngle);
      }

      function caseS() {
        if (acc > 0) {
          acc = 0;
        } else {
          carFowardBack.current.rotateOnAxis(moveDirection, -rotationAngle);
        }
      }

      function caseA() {
        carLeftRight.current.rotateY(rotationAngle);
        moveDirection.applyAxisAngle(moveAngle, rotationAngle);
      }

      function caseD() {
        carLeftRight.current.rotateY(-rotationAngle);
        moveDirection.applyAxisAngle(moveAngle, -rotationAngle);
      }
    };

    const handleKeyUp = () => {
      // clear keys
      keys = [];

      if (acc <= 0) return;
      if (timer) return;

      // slowly car stops
      timer = setInterval(() => {
        if (acc <= 0) {
          clearInterval(timer);
          timer = null;
        }
        acc = acc - 5;
        const rotationAngle = Math.PI / (180 - acc);
        carFowardBack.current.rotateOnAxis(moveDirection, rotationAngle);
      }, 50);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
}

export default useMovement;

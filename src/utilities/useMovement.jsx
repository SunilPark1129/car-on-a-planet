import React, { useEffect, useState } from "react";
import * as THREE from "three";

let timer;
let pointerTimer;
let acc = 0;

function useMovement({ carFowardBack, carLeftRight, pointerKeys }) {
  const [moveDirection] = useState(new THREE.Vector3(1, 0, 0));
  const [moveAngle] = useState(new THREE.Vector3(0, 1, 0));
  useEffect(() => {
    // keys for user keydown handler
    // it can store 2 keys
    let keys = [];

    if (pointerKeys.length !== 0) {
      if (pointerTimer) clearInterval(pointerTimer);
      pointerTimer = setInterval(() => {
        handleKeyDown({ key: pointerKeys });
      }, 30);
    } else {
      clearTimeout(pointerTimer);
      handleKeyUp();
    }

    function handleKeyDown(event) {
      // speed
      const rotationAngle = Math.PI / (100 - acc);

      /* if keyCode is not empty then it's from keyboard event */
      /* else it's from pointer event */
      const { key, keyCode } = event;

      // store the key value
      if (keyCode) {
        if (keys.length === 0 || keys[0] === key) {
          keys[0] = key;
        } else {
          keys[1] = key;
        }
      } else {
        keys = key;
      }

      // when event key is from keydown handler
      // clear interval timer (onPointerHandler)
      if (keyCode) {
        clearTimeout(pointerTimer);
      }

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
    }

    function handleKeyUp() {
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
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [pointerKeys]);
}

export default useMovement;

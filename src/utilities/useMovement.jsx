import React, { useEffect, useState } from "react";
import * as THREE from "three";

let accTimeId;
let keyTimeId;
let acc = 0;

function useMovement({ carFowardBack, carLeftRight, pointerKeys }) {
  const [moveDirection] = useState(new THREE.Vector3(1, 0, 0));
  const [moveAngle] = useState(new THREE.Vector3(0, 1, 0));
  useEffect(() => {
    // keys for user keydown values
    // it can store upto 2 keys
    let keys = [];

    /* ----------------------------- tab/clicked handler ----------------------------- */

    if (pointerKeys.length !== 0) {
      if (keyTimeId) clearInterval(keyTimeId);
      keyTimeId = setInterval(() => {
        addMove(pointerKeys);
      }, 30);
    } else {
      handleKeyUp();
    }

    /* ----------------------------- keydown handler ----------------------------- */
    function handleKeyDown(event) {
      const { key, keyCode } = event;

      // ignore current process when directions are left and right at the same time
      if (
        (keys.includes("a") && key === "d") ||
        (keys.includes("d") && key === "a")
      ) {
        return;
      }

      let direction;

      switch (keyCode) {
        case 38:
          direction = "w";
          break;
        case 40:
          direction = "s";
          break;
        case 37:
          direction = "a";
          break;
        case 39:
          direction = "d";
          break;
        default:
          direction = key;
          break;
      }

      if (
        direction !== "w" &&
        direction !== "s" &&
        direction !== "a" &&
        direction !== "d"
      ) {
        return;
      }

      if (keys.includes(direction)) return;
      if (keys.length === 2) {
        keys.shift();
      }
      keys.push(direction);

      if (keyTimeId) clearInterval(keyTimeId);
      keyTimeId = setInterval(() => {
        addMove(keys);
      }, 30);
    }

    /* ----------------------------- add movement ----------------------------- */

    function addMove(keys) {
      // car speed
      const rotationAngle = Math.PI / (100 - acc);

      if (keys.includes("w")) {
        caseW();
      }
      if (keys.includes("s")) {
        caseS();

        // when the car is reversing with left/right direction, adjust left and right symmetry (user experience)
        if (keys.includes("a")) {
          caseD();
          return;
        }
        if (keys.includes("d")) {
          caseA();
          return;
        }
      }
      if (keys.includes("a")) {
        caseA();
      }
      if (keys.includes("d")) {
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

    /* ----------------------------- clear datas ----------------------------- */

    function handleKeyUp(e) {
      if (e?.key) {
        keys = keys.filter((item) => item !== e.key);
      } else {
        keys = [];
      }
      clearTimeout(keyTimeId);

      if (acc <= 0) return;
      if (accTimeId) return;

      // stops the car slowly by using acceleration
      accTimeId = setInterval(() => {
        if (acc <= 0) {
          clearInterval(accTimeId);
          accTimeId = null;
        }
        acc = acc - 3;
        const rotationAngle = Math.PI / (180 - acc);
        carFowardBack.current.rotateOnAxis(moveDirection, rotationAngle);
      }, 40);
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

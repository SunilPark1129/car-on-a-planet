import React, { useState } from "react";

function Manual() {
  const [hasClicked, setHasClicked] = useState(false);
  if (hasClicked) return;
  return (
    <div className="manual">
      <h1>TIP</h1>
      <p>
        You can move the car using the <span>w</span>, <span>a</span>,{" "}
        <span>s</span>, <span>d</span> keys or the <span>Arrow</span> keys on
        the keyboard. You can also <span>drag</span> to move the camera.
      </p>
      <button onClick={() => setHasClicked(true)}>OK</button>
    </div>
  );
}

export default Manual;

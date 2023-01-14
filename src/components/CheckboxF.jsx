import { useState, useContext } from "react";
import { CarparkContext } from "../Context/CarparkContext";

function CheckboxF() {
  const cp = useContext(CarparkContext)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={cp.toggleFree}
          onChange={() => cp.setToggleFree((prev) => !prev)}
        />
        <span>Free Parking</span>
      </label>
    </div>
  );
}

export default CheckboxF;

import { useState, useContext } from "react";
import { CarparkContext } from "../Context/CarparkContext";

function CheckboxN() {
  const cp = useContext(CarparkContext)

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={cp.toggleNight}
          onChange={() => cp.setToggleNight((prev) => !prev)}
        />
        <span>Night Parking</span>
      </label>
    </div>
  );
}

export default CheckboxN;

import React, { useState } from "react";
import COOKIE from "./cookie.png";
export default function Main() {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>
        <img src={COOKIE} alt="" />
      </button>
      <p>{click} </p>
    </div>
  );
}

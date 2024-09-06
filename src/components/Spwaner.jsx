import React from "react";
import Element from "./Element";

const Spwaner = ({ element, count, top, left }) => {
  const elements = Array.from({ length: count });

  return (
    <div
      className="absolute"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // To prevent interactions with the emojis
      }}
    >
      {elements.map((_, index) => (
        <Element key={index} element={element} />
      ))}
    </div>
  );
};

export default Spwaner;

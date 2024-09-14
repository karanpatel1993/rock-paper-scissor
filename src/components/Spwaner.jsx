import React, { useState } from "react";
import Element from "./Element";
import { detectCollision } from "../utils";

const Spwaner = ({ elements, top, left }) => {
  const [allElements, setAllElements] = useState(
    elements.flatMap(({ element, count }) =>
      Array.from({ length: count }, (_, index) => ({
        id: `${element}-${index}`,
        type: element,
        position: {
          x: Math.random() * window.innerWidth * 0.5,
          y: Math.random() * window.innerHeight * 0.5,
        },
        isVisible: true, // New property to track visibility
      }))
    )
  );

  const ElementMapping = {
    "✂️": new Audio(`/sounds/scissor.mp3`),
    "🪨": new Audio(`/sounds/rock.mp3`),
    "📜": new Audio(`/sounds/paper.mp3`),
  };

  const playSound = (type) => {
    const audio = ElementMapping[type];
    audio.play();
  };

  const handleCollision = (id, newPosition) => {
    setAllElements((prevElements) => {
      // Find the element that moved
      const currentElement = prevElements.find((el) => el.id === id);
      if (!currentElement || !currentElement.isVisible) return prevElements;

      // Update the position of the moved element
      let updatedElements = prevElements.map((el) =>
        el.id === id ? { ...el, position: newPosition } : el
      );

      // Detect collisions with the updated position
      const collidedElements = updatedElements.filter(
        (e) =>
          e.id !== id && e.isVisible && detectCollision(e.position, newPosition)
      );

      // Handle collisions based on Rock-Paper-Scissors rules
      collidedElements.forEach((e) => {
        if (isWinner(currentElement.type, e.type)) {
          playSound(currentElement.type);
          // Make the losing element invisible
          updatedElements = updatedElements.map((el) =>
            el.id === e.id ? { ...el, isVisible: false } : el
          );
        } else if (isWinner(e.type, currentElement.type)) {
          // Make the current element invisible
          playSound(currentElement.type);
          updatedElements = updatedElements.map((el) =>
            el.id === id ? { ...el, isVisible: false } : el
          );
        }
      });

      return updatedElements;
    });
  };

  const isWinner = (type1, type2) => {
    return (
      (type1 === "🪨" && type2 === "✂️") ||
      (type1 === "✂️" && type2 === "📜") ||
      (type1 === "📜" && type2 === "🪨")
    );
  };

  return (
    <div
      className="absolute"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      {allElements
        .filter((el) => el.isVisible)
        .map(({ id, type, position }) => (
          <Element
            key={id}
            id={id}
            element={type}
            position={position}
            onCollision={handleCollision}
          />
        ))}
    </div>
  );
};

export default Spwaner;

import React, { useState } from "react";
import Element from "./Element";
import { handleCollision } from "../utils/gameLogic";
import Title from "./Title";

const Spawner = ({ elements }) => {
  const [allElements, setAllElements] = useState(
    elements.flatMap(({ element, count }) =>
      Array.from({ length: count }, (_, index) => ({
        id: `${element}-${index}`,
        type: element,
        position: {
          x: Math.random() * window.innerWidth * 0.5,
          y: Math.random() * window.innerHeight * 0.5,
        },
      }))
    )
  );

  const [gameOver, setGameOver] = useState(false);
  const [winnerType, setWinnerType] = useState(null);

  if (gameOver) {
    return <Title title="Wins!" icon={winnerType} />;
  }

  return (
    <div
      className="absolute"
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      {allElements.map(({ id, type, position }) => (
        <Element
          key={id}
          id={id}
          element={type}
          position={position}
          onCollision={(id, newPosition) =>
            handleCollision(
              id,
              newPosition,
              allElements,
              setAllElements,
              setGameOver,
              setWinnerType
            )
          }
        />
      ))}
    </div>
  );
};

export default Spawner;

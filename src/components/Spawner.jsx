import React, { useState } from "react";
import Element from "./Element";
import { handleCollision } from "../utils/gameLogic";
import Title from "./Title";
import { generateElements } from "../utils/elementUtils";
import Button from "./Button";

const Spawner = ({ elements }) => {
  const [allElements, setAllElements] = useState(generateElements(elements));

  const [gameOver, setGameOver] = useState(false);
  const [winnerType, setWinnerType] = useState(null);

  const resetGame = () => {
    setAllElements(generateElements(elements));
    setGameOver(false);
    setWinnerType(null);
  };

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Title title="Game Over!" />
        <Title title="Wins!" icon={winnerType} />
        <Button method={resetGame} title="Play Again" />
      </div>
    );
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

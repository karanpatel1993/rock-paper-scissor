import React, { useEffect, useState } from "react";
import Element from "./Element";
import { handleCollision } from "../utils/gameLogic";
import Title from "./Title";
import { generateElements } from "../utils/elementUtils";
import Button from "./Button";
import { useRecoilState } from "recoil";
import { elementWinCountState } from "../state/recoilState";
import { ScoreCard } from "./Scorecard";

const Spawner = ({ elements, onGameOver, gameMode }) => {
  const [winCount, setWinCount] = useRecoilState(elementWinCountState);
  const [allElements, setAllElements] = useState(
    generateElements(elements, gameMode)
  );
  const [gameOver, setGameOver] = useState(false);
  const [winnerType, setWinnerType] = useState(null);

  const resetGame = () => {
    setAllElements(generateElements(elements, gameMode));
    setGameOver(false);
    setWinnerType(null);
  };

  const updateWinCount = (type) => {
    setWinCount((prevCount) => ({
      ...prevCount,
      [type]: (prevCount[type] || 0) + 1,
    }));
  };

  useEffect(() => {
    if (gameOver && winnerType) {
      updateWinCount(winnerType);
    }
  }, [gameOver, winnerType]);

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4 w-full">
        <Title title="Game Over!" />
        <Title title="Wins!" icon={winnerType} />
        <Button method={resetGame} title="Play Again" />
        <ScoreCard winCount={winCount} gameMode={gameMode} />
        <Button method={onGameOver} title="Reset Game" />
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

import React from "react";
import { elements, specialElements } from "../utils/elementUtils";

export const ScoreCard = ({ winCount, gameMode }) => {
  const gameElements =
    gameMode === "special" ? [...elements, ...specialElements] : elements;

  return (
    <div className="p-4 px-12 mx-auto bg-white rounded-xl shadow-md space-y-4 w-md">
      <h2 className="text-xl font-bold text-gray-900 text-center">Scorecard</h2>
      <div className="space-y-2">
        {gameElements.map(({ element }) => (
          <div
            key={element}
            className="flex items-center justify-between p-2 bg-gray-100 rounded-md w-48"
          >
            <span className="text-lg font-medium text-gray-700">{element}</span>
            <span className="text-lg font-medium text-gray-900">
              {winCount[element] || 0} wins
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

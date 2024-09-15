import React from "react";

export const ScoreCard = ({ winCount }) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Scorecard</h2>
      <div className="space-y-2">
        {Object.keys(winCount).map((type) => (
          <div
            key={type}
            className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
          >
            <span className="text-lg font-medium text-gray-700">{type}</span>
            <span className="text-lg font-medium text-gray-900">
              {winCount[type]} wins
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

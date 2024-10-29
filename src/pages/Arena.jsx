import Button from "../components/Button";
import Spawner from "../components/Spawner";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import { useRecoilState } from "recoil";
import Title from "../components/Title";
import {
  elements,
  generateDefaultWinCount,
  gameModes,
} from "../utils/elementUtils";
import { elementWinCountState, resetRecoilState } from "../state/recoilState";

export default function Arena() {
  const [simulationStarted, setSimulationStarted] = useState(false);
  const [winCount, setWinCount] = useRecoilState(elementWinCountState);
  const [selectedGameMode, setSelectedGameMode] = useState(gameModes[0].value); // Default to first mode

  const startSimulation = () => {
    setSimulationStarted(true);
  };

  const resetToInitialScreen = () => {
    resetRecoilState([() => setWinCount(generateDefaultWinCount())]);
    setSimulationStarted(false);
  };

  const handleGameModeChange = (event) => {
    setSelectedGameMode(event.target.value);
  };

  return (
    <div className="font-extrabold text-lg relative w-full h-screen flex justify-center items-center">
      {!simulationStarted && (
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <Title title={"Rock Paper Scissor Wars"} />
          <Dropdown
            value={selectedGameMode}
            onChange={handleGameModeChange}
            options={gameModes}
            className="mb-4" // Add margin-bottom to the select component
          />
          <Button method={startSimulation} title="New Game" />
        </div>
      )}
      {simulationStarted && (
        <Spawner elements={elements} onGameOver={resetToInitialScreen} />
      )}
    </div>
  );
}

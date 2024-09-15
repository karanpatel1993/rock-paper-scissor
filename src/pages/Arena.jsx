import Button from "../components/Button";
import Spawner from "../components/Spawner";
import { useState } from "react";
import Title from "../components/Title";

export default function Arena() {
  const [simulationStarted, setSimulationStarted] = useState(false);

  const startSimulation = () => {
    setSimulationStarted(true);
  };

  // Combine all elements into one array with their types and counts
  const elements = [
    { element: "📜", count: 50 },
    { element: "🪨", count: 50 },
    { element: "✂️", count: 50 },
  ];
  return (
    <div className="font-extrabold text-lg relative w-full h-screen flex justify-center items-center">
      {!simulationStarted && (
        <div class="flex flex-col items-center justify-center w-full h-screen">
          <Title title={"Rock Paper Scissor Wars"} />
          <Button method={startSimulation} title="New Game" />
        </div>
      )}
      {simulationStarted && <Spawner elements={elements} />}
    </div>
  );
}

import Button from "../components/Button";
import Spwaner from "../components/Spwaner";
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
          <Title />
          <Button startSimulation={startSimulation} />
        </div>
      )}
      {simulationStarted && <Spwaner elements={elements} top={0} left={0} />}
    </div>
  );
}

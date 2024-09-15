import Button from "../components/Button";
import Spawner from "../components/Spawner";
import { useState } from "react";
import Title from "../components/Title";
import { elements } from "../utils/elementUtils";

export default function Arena() {
  const [simulationStarted, setSimulationStarted] = useState(false);

  const startSimulation = () => {
    setSimulationStarted(true);
  };

  return (
    <div className="font-extrabold text-lg relative w-full h-screen flex justify-center items-center">
      {!simulationStarted && (
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <Title title={"Rock Paper Scissor Wars"} />
          <Button method={startSimulation} title="New Game" />
        </div>
      )}
      {simulationStarted && <Spawner elements={elements} />}
    </div>
  );
}

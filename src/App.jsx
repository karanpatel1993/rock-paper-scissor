import Spwaner from "./components/Spwaner";
import { useState } from "react";

function App() {
  const [simulationStarted, setSimulationStarted] = useState(false);

  const startSimulation = () => {
    setSimulationStarted(true);
  };

  // Combine all elements into one array with their types and counts
  const elements = [
    { element: "📜", count: 15 },
    { element: "🪨", count: 15 },
    { element: "✂️", count: 15 },
  ];

  return (
    <div className="font-extrabold text-lg relative w-full h-screen">
      {!simulationStarted && (
        <button
          onClick={startSimulation}
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Start
        </button>
      )}
      {simulationStarted && <Spwaner elements={elements} top={0} left={0} />}
    </div>
  );
}

export default App;

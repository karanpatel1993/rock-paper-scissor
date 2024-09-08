import Spwaner from "./components/Spwaner";

function App() {
  // Combine all elements into one array with their types and counts
  const elements = [
    { element: "📜", count: 15 },
    { element: "🪨", count: 15 },
    { element: "✂️", count: 15 },
  ];

  return (
    <div className="font-extrabold text-lg relative w-full h-screen">
      {/* Pass the combined elements array to a single Spwaner */}
      <Spwaner elements={elements} top={0} left={0} />
    </div>
  );
}

export default App;

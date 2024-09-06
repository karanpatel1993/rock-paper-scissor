import Spwaner from "./components/Spwaner";

function App() {
  return (
    <div className="font-extrabold text-lg relative w-full h-screen">
      <Spwaner element="📜" count={50} top={0} left={0} />
      <Spwaner element="🪨" count={50} top={0} left={300} />
      <Spwaner element="✂️" count={50} top={300} left={0} />
    </div>
  );
}

export default App;

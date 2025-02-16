import GameManager from "./Components/GameManager";
import GameProvider from "./Redux/GameProvider";

function App() {
  return (
    <>
      <GameProvider>
        <GameManager />
      </GameProvider>
    </>
  );
}

export default App;

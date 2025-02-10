import Game from "./Components/Game";
import GameProvider from "./Redux/GameProvider";

function App() {
  return (
    <>
      <GameProvider>
        <Game />
      </GameProvider>
    </>
  );
}

export default App;

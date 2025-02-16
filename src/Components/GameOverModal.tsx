interface GameOverModalProps {
  handleReset: () => void;
}
const GameOverModal: React.FC<GameOverModalProps> = ({ handleReset }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-400 opacity-70 flex justify-center items-center"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-transparent flex justify-center items-center">
        <div className="bg-white p-8 rounded-md border-2 opacity-100 border-gray-300 flex flex-col items-center">
          <div className="flex flex-row items-center">
            <p className="text-4xl">💥</p>
            <p>Game Over</p>
            <p className="text-4xl">💥</p>
          </div>
          <button
            className="p-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-md"
            onClick={handleReset}
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;

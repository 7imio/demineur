import { Difficulty } from "../../interfaces/Difficulty";

interface DifficultySelectorProps {
  setDifficulty: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  setDifficulty,
}) => {
  return (
    <div className="flex flex-row w-full justify-center">
      <button
        className="p-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-md"
        onClick={() => setDifficulty(Difficulty.EASY)}
      >
        Easy
      </button>
      <button
        className="p-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-md"
        onClick={() => setDifficulty(Difficulty.MEDIUM)}
      >
        Medium
      </button>
      <button
        className="p-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-md"
        onClick={() => setDifficulty(Difficulty.HARD)}
      >
        Hard
      </button>
    </div>
  );
};

export default DifficultySelector;

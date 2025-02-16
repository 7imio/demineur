import { useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setGrid, setGridData, setPlaying, setReset } from "../store/gameSlice";
import Grid from "./Grid/Grid";
import { Difficulty } from "../interfaces/Difficulty";
import DifficultySelector from "./LevelSelector/DifficultySelector";
import GameOverModal from "./GameOverModal";

interface GameProps {}
const GameManager: React.FC<GameProps> = () => {
  const { height, width, totalBombs, grid, gameOver, playing } = useSelector(
    (state: RootState) => state.gameManager
  );

  const dispatch = useDispatch();

  const [difficulty, setDifficulty] = useState<Difficulty | null>();

  const handleDifficulty = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  const handleReset = () => {
    setDifficulty(null);
    dispatch(setReset());
  };

  useEffect(() => {
    if (difficulty === null) return;
    switch (difficulty) {
      case Difficulty.EASY:
        dispatch(setGridData({ width: 10, height: 10, totalBombs: 10 }));
        dispatch(setPlaying(true));
        break;
      case Difficulty.MEDIUM:
        dispatch(setGridData({ width: 15, height: 15, totalBombs: 30 }));
        dispatch(setPlaying(true));
        break;
      case Difficulty.HARD:
        dispatch(setGridData({ width: 20, height: 20, totalBombs: 50 }));
        dispatch(setPlaying(true));
        break;
      default:
        break;
    }
  }, [difficulty, dispatch]);

  useEffect(() => {
    if (height && width && totalBombs) {
      dispatch(setGrid());
    }
  }, [dispatch, height, width, totalBombs]);

  return (
    <>
      {gameOver && <GameOverModal handleReset={handleReset} />}
      <p className="p-4 text-2xl flex flex-row w-full align-center justify-center">
        DEMINEUR {difficulty && ` - ${difficulty}`}
      </p>
      {!playing && <DifficultySelector setDifficulty={handleDifficulty} />}
      {playing && grid && (
        <>
          <Grid />
          <button
            className="p-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-md"
            onClick={handleReset}
          >
            Reset Game
          </button>
        </>
      )}
    </>
  );
};

export default GameManager;

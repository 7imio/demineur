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
  const [custom, setCustom] = useState<boolean>(false);
  const [customData, setCustomData] = useState<{
    height: number;
    width: number;
    totalBombs: number;
  }>({
    height: 5,
    width: 5,
    totalBombs: 5,
  });

  const [isValidData, setIsValidData] = useState<boolean>(true);

  const handleDifficulty = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  const handleReset = () => {
    setDifficulty(null);
    dispatch(setReset());
  };

  const handleCustomDifficultyValidation = () => {
    if (
      customData.height < 5 ||
      customData.width < 5 ||
      customData.totalBombs < 5
    ) {
      setIsValidData(false);
      return;
    }
    dispatch(setGridData(customData));
    dispatch(setPlaying(true));
    setIsValidData(true);
  };

  useEffect(() => {
    if (difficulty === null && !custom) return;
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
      {!playing && (
        <div className="flex flex-col w-full align-center justify-center items-center">
          <div className="flex flex-col w-full align-center justify-center items-center">
            <DifficultySelector setDifficulty={handleDifficulty} />
            <button
              className="p-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-md w-1/2"
              onClick={() => setCustom(!custom)}
            >
              Custom Difficulty
            </button>
          </div>
          {custom && (
            <>
              <div className="flex flex-col w-1/4 align-center justify-center items-center border-2 border-gray-300 p-4 rounded-md">
                <label>
                  Height
                  <input
                    min={5}
                    type="number"
                    value={customData.height}
                    onChange={(e) =>
                      setCustomData({
                        ...customData,
                        height: parseInt(e.target.value),
                      })
                    }
                  ></input>
                </label>
              </div>
              <div className="flex flex-col w-1/4 align-center justify-center items-center border-2 border-gray-300 p-4 rounded-md">
                <label>
                  Width
                  <input
                    min={5}
                    type="number"
                    value={customData.width}
                    onChange={(e) =>
                      setCustomData({
                        ...customData,
                        width: parseInt(e.target.value),
                      })
                    }
                  ></input>
                </label>
              </div>
              <div className="flex flex-col w-1/4 align-center justify-center items-center border-2 border-gray-300 p-4 rounded-md">
                <label>
                  Bombs
                  <input
                    min={5}
                    type="number"
                    value={customData.totalBombs}
                    onChange={(e) =>
                      setCustomData({
                        ...customData,
                        totalBombs: parseInt(e.target.value),
                      })
                    }
                  ></input>
                </label>
              </div>
              <button
                onClick={handleCustomDifficultyValidation}
                className="p-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-md"
              >
                Validation
              </button>
              {!isValidData && (
                <p className="text-red-500">
                  Invalid data, min 5 for everything
                </p>
              )}
            </>
          )}
        </div>
      )}
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

import { useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setGrid, setGridData } from "../store/gameSlice";
import Grid from "./Grid/Grid";

interface GameProps {}
const GameManager: React.FC<GameProps> = () => {
  const { height, width, totalBombs, grid } = useSelector(
    (state: RootState) => state.gameManager
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGridData({ width: 10, height: 10, totalBombs: 10 }));
  }, [dispatch]);

  useEffect(() => {
    if (height && width && totalBombs) {
      dispatch(setGrid());
    }
  }, [dispatch, height, width, totalBombs]);

  return (
    <>
      <p className="p-4 text-2xl flex flex-row w-full align-center justify-center">
        DEMINEUR
      </p>
      {grid && <Grid />}
    </>
  );
};

export default GameManager;

import { useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setGridSizeAction } from "../store/gameSlice";

interface GameProps {}
const Game: React.FC<GameProps> = () => {
  const { height, width } = useSelector((state: RootState) => state.game);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGridSizeAction({ x: 10, y: 10 }));
  }, []);

  return (
    <>
      <p className="p-4 t flex flex-row w-full align-center justify-center">
        Hello World, {height} : {width}
      </p>
    </>
  );
};

export default Game;

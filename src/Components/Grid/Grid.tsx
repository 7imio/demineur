import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Cell from "./Cell";

const Grid = () => {
  const { grid } = useSelector((state: RootState) => state.gameManager);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="flex flex-col align-middle justify-center items-center"
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((cell, cellIndex) => (
            <Cell key={cellIndex} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Grid;

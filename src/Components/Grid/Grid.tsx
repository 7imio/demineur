import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Cell from "./Cell";

const Grid = () => {
  const { grid, flags, totalBombs } = useSelector(
    (state: RootState) => state.gameManager
  );

  return (
    <>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-row justify-evenly w-1/2">
          <p className="text-4xl">Bombs : {totalBombs}</p>
          <p className="text-4xl">Flags : {flags}</p>
        </div>
      </div>
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
    </>
  );
};
export default Grid;

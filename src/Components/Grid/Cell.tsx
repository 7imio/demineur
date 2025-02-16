import { useState } from "react";
import { Cell as CellType } from "../../interfaces/Cell";
import { setFlagCell, setRevealCell } from "../../store/gameSlice";
import { useDispatch } from "react-redux";

export interface CellProps {
  cell: CellType;
}

const Cell: React.FC<CellProps> = ({ cell }) => {
  const [isHover, setIsHover] = useState(false);

  const dispatch = useDispatch();

  /**
   * Render the cell content
   * @param cell
   * @returns
   */
  const renderCellContent = (cell: CellType) => {
    if (cell.isFlagged) {
      return "🚩";
    }
    if (cell.isRevealed) {
      if (cell.isBomb) {
        return "💣";
      }
      if (cell.adjacentBombs > 0) {
        return cell.adjacentBombs;
      }
    }
    return "";
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setRevealCell(cell));
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setFlagCell(cell));
  };

  return (
    <button
      className={`w-8 h-8 flex rounded-md m-px justify-center items-center ${
        cell.isRevealed || cell.isFlagged
          ? "bg-gray-400"
          : `${isHover ? "bg-gray-200" : "bg-gray-300"}`
      }`}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {renderCellContent(cell)}
    </button>
  );
};

export default Cell;

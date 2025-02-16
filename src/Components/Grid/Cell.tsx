import { Cell as CellType } from "../../interfaces/Cell";

export interface CellProps {
  cell: CellType;
}

const Cell: React.FC<CellProps> = ({ cell }) => {
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

  return (
    <button className="w-8 h-8 border border-black flex justify-center items-center">
      {renderCellContent(cell)}
    </button>
  );
};

export default Cell;

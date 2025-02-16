import { Cell as CellType } from "../../interfaces/Cell";

export interface CellProps {
  cell: CellType;
}

const Cell: React.FC<CellProps> = ({ cell }) => {
  return (
    <div className="w-8 h-8 border border-black flex justify-center items-center">
      {cell.x}:{cell.y}
    </div>
  );
};

export default Cell;

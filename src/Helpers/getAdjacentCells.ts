import { Cell } from "../interfaces/Cell";
import { Grid } from "../interfaces/Grid";

export const getAdgacentCells = (grid: Grid, cell: Cell): Cell[] => {
  const { x, y } = cell;
  const adjacentCells: Cell[] = [];

  for (let xOffset = -1; xOffset <= 1; xOffset++) {
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      const adjacentX = x + xOffset;
      const adjacentY = y + yOffset;

      if (
        adjacentX >= 0 &&
        adjacentX < grid.length &&
        adjacentY >= 0 &&
        adjacentY < grid[0].length
      ) {
        adjacentCells.push(grid[adjacentY][adjacentX]);
      }
    }
  }

  return adjacentCells;
};

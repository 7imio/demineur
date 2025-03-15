import { Grid } from "../interfaces/Grid";

export const revealAllBombs = (grid: Grid): void => {
  grid.forEach((row) => {
    row.forEach((cell) => {
      if (cell.isBomb) {
        cell.isRevealed = true;
      }
    });
  });
};

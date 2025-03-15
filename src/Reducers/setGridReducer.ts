import { createCell } from "../Helpers/createCell";
import { getAdjacentCells } from "../Helpers/getAdjacentCells";
import { Cell } from "../interfaces/Cell";
import { GameState } from "../interfaces/GameState";

/**
 * Set the grid in the global state
 * @param state
 */
export const setGridReducer = (state: GameState) => {
  if (!state.height && !state.width && !state.totalBombs) {
    console.error(
      "No height, width, or bombs are set, try set grid data before trying to generate grid"
    );
    return;
  }
  const grid = Array.from({ length: state.height }).map((_, coordY) =>
    Array.from({ length: state.width }).map((_, coordX) =>
      createCell(coordX, coordY)
    )
  );

  let bombs = state.totalBombs;
  if (state.totalBombs > (state.height * state.width) / 2) {
    console.error("Too many bombs for the grid");
    bombs = Math.floor((state.height * state.width) / 2);
    state.totalBombs = bombs;
  }
  while (bombs > 0) {
    const x = Math.floor(Math.random() * state.width);
    const y = Math.floor(Math.random() * state.height);
    if (!grid[y][x].isBomb) {
      grid[y][x].isBomb = true;
      bombs--;
    }
  }
  grid.forEach((row) => {
    row.forEach((cell) => {
      if (cell.isBomb) return;
      let bombs = 0;
      const adjacentCells = getAdjacentCells(grid, cell);
      adjacentCells.forEach((adjacentCell: Cell) => {
        if (adjacentCell.isBomb) {
          bombs++;
        }
      });
      cell.adjacentBombs = bombs;
    });
  });

  state.grid = grid;
};

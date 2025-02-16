import { createCell } from "../Helpers/createCell";
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
  while (bombs > 0) {
    const x = Math.floor(Math.random() * state.width);
    const y = Math.floor(Math.random() * state.height);
    if (!grid[y][x].isBomb) {
      grid[y][x].isBomb = true;
      bombs--;
    }
  }
  state.grid = grid;
};

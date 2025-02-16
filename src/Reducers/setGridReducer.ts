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

  state.grid = grid;
};

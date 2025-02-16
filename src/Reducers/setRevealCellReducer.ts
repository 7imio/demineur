import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../interfaces/GameState";
import { CellPayload } from "./interfaces/CellPayload";
import { getAdjacentCells } from "../Helpers/getAdjacentCells";

export const setRevealCellReducer = (
  state: GameState,
  action: PayloadAction<CellPayload>
): void => {
  const { x, y } = action.payload;
  const cell = state.grid[y][x];
  if (!cell) {
    console.error("Cell not found");
    return;
  }
  if (cell.isRevealed) return;
  if (cell.isFlagged) return;
  cell.isRevealed = true;
  if (cell.isBomb) {
    // state.gameOver = true;
  } else {
    if (cell.adjacentBombs === 0) {
      const adjacentCells = getAdjacentCells(state.grid, cell);
      adjacentCells.forEach((adjacentCells) => {
        if (!adjacentCells.isRevealed) {
          setRevealCellReducer(state, {
            payload: { x: adjacentCells.x, y: adjacentCells.y },
            type: "setRevealCell",
          });
        }
      });
    }
  }
};

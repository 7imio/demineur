import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../interfaces/GameState";
import { CellPayload } from "./interfaces/CellPayload";

export const setRevealCellReducer = (
  state: GameState,
  action: PayloadAction<CellPayload>
): void => {
  const { x, y } = action.payload;
  const cell = state.grid[y][x];
  if (cell.isRevealed) return;
  if (cell.isFlagged) return;
  cell.isRevealed = true;
};

import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../interfaces/GameState";
import { CellPayload } from "./interfaces/CellPayload";

export const setFlagCellReducer = (
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
  if (!cell.isFlagged && state.flags === state.totalBombs) return;

  cell.isFlagged = !cell.isFlagged;
  if (cell.isFlagged) {
    state.flags++;
  } else {
    state.flags--;
  }
};

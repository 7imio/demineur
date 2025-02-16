import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../interfaces/GameState";

export type GridDataPayload = Partial<GameState>

export const setGridDataReducer = (
  state: GameState,
  action: PayloadAction<GridDataPayload>
): void => {
  const { width, height, totalBombs } = action.payload;
  if (!width || !height || !totalBombs) {
    const xError = width?"":"x "
    const yError = height?"":"y "
    const totalBombsError = totalBombs?"":"totalBombs"
    console.error(`One or many parameters is missing : ${xError}${yError}${totalBombsError}`)
    return;
  }
  state.height = height;
  state.width = width;
  state.totalBombs = totalBombs;
};

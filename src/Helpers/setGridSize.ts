import { PayloadAction } from "@reduxjs/toolkit";
import { Coordinates } from "../interfaces/Coordinates";
import { GameState } from "../interfaces/GameState";

export const setGridSize = (
  state: GameState,
  action: PayloadAction<Coordinates>
): void => {
  const { x, y } = action.payload;
  state.height = y;
  state.width = x;
};

import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../interfaces/GameState";

export const setGameOverReducer = (
  state: GameState,
  action: PayloadAction<boolean>
): void => {
  const gameOver = action.payload;
  if (!gameOver) {
    console.error(`parameters is missing : gameOver`);
    return;
  }
  state.gameOver = gameOver;
};

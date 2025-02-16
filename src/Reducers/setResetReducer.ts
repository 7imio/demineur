import { GameState } from "../interfaces/GameState";

export const setResetReducer = (state: GameState): void => {
  state.gameOver = false;
  state.playing = false;
  state.grid = [];
  state.height = 0;
  state.totalBombs = 0;
  state.width = 0;
};

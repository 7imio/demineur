import { PayloadAction } from "@reduxjs/toolkit";
import { GameState } from "../interfaces/GameState";

export const setPlayingReducer = (
  state: GameState,
  action: PayloadAction<boolean>
): void => {
  const playing = action.payload;
  if (!playing) {
    console.error(`parameters is missing : playing`);
    return;
  }
  state.playing = playing;
};

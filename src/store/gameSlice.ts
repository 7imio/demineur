import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { GameState } from "../interfaces/GameState";
import { setGridSize } from "../Helpers/setGridSize";
import { Coordinates } from "../interfaces/Coordinates";

const initialState: GameState = {
  grid: [],
  gameOver: false,
  playing: false,
  height: 0,
  totalBombs: 0,
  width: 0,
};

const storeSlice: CreateSliceOptions<
  GameState,
  {
    setGridSizeAction: (
      state: GameState,
      action: PayloadAction<Coordinates>
    ) => void;
  }
> = {
  name: "Demineur",
  initialState,
  reducers: {
    setGridSizeAction: setGridSize,
  },
};

const gameSlice = createSlice(storeSlice);

export const { setGridSizeAction } = gameSlice.actions;
export default gameSlice.reducer;

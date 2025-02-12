import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { setGridReducer } from '../Reducers/setGridReducer';
import { GridDataPayload, setGridDataReducer } from "../Reducers/setGridSizeReducer";
import { GameState } from "../interfaces/GameState";

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
    setGridData: (
      state: GameState,
      action: PayloadAction<GridDataPayload>
    ) => void;
    setGrid:(
      state:GameState
    )=>void
  }
> = {
  name: "Demineur",
  initialState,
  reducers: {
    setGridData: setGridDataReducer,
    setGrid:setGridReducer,
  },
};

const gameSlice = createSlice(storeSlice);

export const { setGridData , setGrid} = gameSlice.actions;
export default gameSlice.reducer;

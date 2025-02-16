import {
  createSlice,
  CreateSliceOptions,
  PayloadAction,
} from "@reduxjs/toolkit";
import { setGridReducer } from "../Reducers/setGridReducer";
import {
  GridDataPayload,
  setGridDataReducer,
} from "../Reducers/setGridDataReducer";
import { GameState } from "../interfaces/GameState";
import { setRevealCellReducer } from "../Reducers/setRevealCellReducer";
import { CellPayload } from "../Reducers/interfaces/CellPayload";
import { setFlagCellReducer } from "../Reducers/setFlagCellReducer";
import { setResetReducer } from "../Reducers/setResetReducer";
import { setPlayingReducer } from "../Reducers/setPlayingReducer";
import { setGameOverReducer } from "../Reducers/setGameOverReducer";

const initialState: GameState = {
  grid: [],
  gameOver: false,
  playing: false,
  height: 0,
  totalBombs: 0,
  width: 0,
};

/**
 * Create a slice for the game
 */
const storeSlice: CreateSliceOptions<
  GameState,
  {
    setGridData: (
      state: GameState,
      action: PayloadAction<GridDataPayload>
    ) => void;
    setGrid: (state: GameState) => void;
    setRevealCell: (
      state: GameState,
      action: PayloadAction<CellPayload>
    ) => void;
    setFlagCell: (state: GameState, action: PayloadAction<CellPayload>) => void;
    setGameOver: (state: GameState, action: PayloadAction<boolean>) => void;
    setPlaying: (state: GameState, action: PayloadAction<boolean>) => void;
    setReset: (state: GameState) => void;
  }
> = {
  name: "Demineur",
  initialState,
  reducers: {
    setGridData: setGridDataReducer,
    setGrid: setGridReducer,
    setRevealCell: setRevealCellReducer,
    setFlagCell: setFlagCellReducer,
    setGameOver: setGameOverReducer,
    setPlaying: setPlayingReducer,
    setReset: setResetReducer,
  },
};

const gameSlice = createSlice(storeSlice);

export const {
  setGridData,
  setGrid,
  setRevealCell,
  setFlagCell,
  setGameOver,
  setPlaying,
  setReset,
} = gameSlice.actions;
export default gameSlice.reducer;

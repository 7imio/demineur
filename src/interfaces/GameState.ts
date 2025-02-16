import { Grid } from "./Grid";

export interface GameState {
  grid: Grid;
  gameOver: boolean;
  playing: boolean;
  width: number;
  height: number;
  totalBombs: number;
}

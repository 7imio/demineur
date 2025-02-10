import { Coordinates } from "./Coordinates";

export interface Cell extends Coordinates {
  isBomb: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  adjacentBombs: number;
}

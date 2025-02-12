import { Cell } from '../interfaces/Cell'

export const createCell =(x:number, y:number) : Cell=> {
    return {
        adjacentBombs:0,
        isBomb:false,
        isFlagged:false,
        isRevealed:false,
        x,
        y
    }
}
import { createCell } from '../Helpers/createCell';
import { GameState } from '../interfaces/GameState';

export const setGridReducer = (
    state: GameState,
) => {
    if (!state.height && !state.width) {
        console.error("No height and / or width, try set grid size before trying to generate grid")
        return;
    }
        const grid = Array
        .from({length:state.height})
        .map((_, coordY)=> 
            Array
                .from({length:state.width})
                .map((_, coordX)=> createCell(coordX, coordY))
        );

        state.grid = grid;
}
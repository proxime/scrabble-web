import { GameState } from '@store/gameSlice';

const getPuzzleIndexes = (board: GameState['board']) =>
    board.flatMap((row, rowIndex) => {
        return row
            .map((cell, columnIndex) => {
                if (cell && !cell.accepted) {
                    return [rowIndex, columnIndex];
                }
                return null;
            })
            .filter((index) => index);
    }) as [number, number][];

export const getIsResultHorizontal = (result: [number, number][]) => {
    const [rowIndex, columnIndex] = result[0];
    for (let i = 1; i < result.length; i++) {
        const [nextRowIndex, nextColumnIndex] = result[i];
        if (nextRowIndex !== rowIndex || nextColumnIndex !== columnIndex + i) {
            return false;
        }
    }
    return true;
};

export const getIsResultVertical = (result: [number, number][]) => {
    const [rowIndex, columnIndex] = result[0];
    for (let i = 1; i < result.length; i++) {
        const [nextRowIndex, nextColumnIndex] = result[i];
        if (nextRowIndex !== rowIndex + i || nextColumnIndex !== columnIndex) {
            return false;
        }
    }
    return true;
};

export const validateBoard = (board: GameState['board']) => {
    const result = getPuzzleIndexes(board);
    const isResultHorizontal = getIsResultHorizontal(result);
    const isResultVertical = getIsResultVertical(result);
    const isValid = isResultHorizontal || isResultVertical;

    return {
        isResultHorizontal,
        isResultVertical,
        isValid,
    };
};

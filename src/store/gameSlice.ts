import { validateBoard } from '@utils/validateBoard';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Puzzle {
    key: string;
    name: string;
    value: number;
}

export interface BoardPuzzle extends Puzzle {
    accepted: boolean;
}

export interface BoardOperation {
    key: Puzzle['key'];
    column: number;
    row: number;
}

export interface GameState {
    activeLetter: null | Puzzle;
    availablePuzzles: Puzzle[];
    boardedPuzzles: Puzzle[];
    puzzles: Puzzle[];
    board: (null | BoardPuzzle)[][];
}

const initBoard: (null | BoardPuzzle)[][] = Array(15)
    .fill(0)
    .map(() => Array(15).fill(null));

const mockPuzzles: Puzzle[] = [
    {
        key: 'l',
        name: 'l',
        value: 7,
    },
    {
        key: 'w',
        name: 'w',
        value: 6,
    },
    {
        key: 'a',
        name: 'a',
        value: 1,
    },
    {
        key: 'e',
        name: 'e',
        value: 1,
    },
    {
        key: 'g',
        name: 'g',
        value: 3,
    },
    {
        key: 'y',
        name: 'y',
        value: 1,
    },
    {
        key: 'i',
        name: 'i',
        value: 2,
    },
];

const initialState: GameState = {
    activeLetter: null,
    availablePuzzles: mockPuzzles,
    boardedPuzzles: [],
    puzzles: mockPuzzles,
    board: initBoard,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setActiveLetter: (state, action: PayloadAction<Puzzle['key']>) => {
            state.activeLetter =
                state.puzzles.find((puzzle) => puzzle.key === action.payload) ||
                null;
        },
        putLetterOnBoard: (
            state,
            { payload: { column, key, row } }: PayloadAction<BoardOperation>,
        ) => {
            const letter =
                state.availablePuzzles.find((puzzle) => puzzle.key === key) ||
                null;
            if (!letter) return;

            state.boardedPuzzles = [...state.boardedPuzzles, letter];
            state.availablePuzzles = state.availablePuzzles.filter(
                (puzzle) => puzzle.key !== key,
            );
            state.board[column][row] = { ...letter, accepted: false };
        },
        removeLetterFromBoard: (
            state,
            { payload: { column, key, row } }: PayloadAction<BoardOperation>,
        ) => {
            const letter =
                state.boardedPuzzles.find((puzzle) => puzzle.key === key) ||
                null;
            if (!letter) return;

            state.availablePuzzles = [...state.availablePuzzles, letter];
            state.boardedPuzzles = state.boardedPuzzles.filter(
                (puzzle) => puzzle.key !== key,
            );
            state.board[column][row] = null;
        },
        acceptPuzzles: (state) => {
            const { isValid } = validateBoard(state.board);
            console.log(isValid);
        },
    },
});

export const {
    setActiveLetter,
    putLetterOnBoard,
    removeLetterFromBoard,
    acceptPuzzles,
} = gameSlice.actions;

export default gameSlice.reducer;

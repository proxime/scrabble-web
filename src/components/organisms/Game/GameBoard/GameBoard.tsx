import { BoardTile } from '@components/molecules/BoardTile/BoardTile';

import { boardPlaceholder } from '@utils/board';

import { GameBoardWrapper } from './GameBoard.styled';

export interface GameBoardProps {}

export const GameBoard = ({}: GameBoardProps) => {
    return (
        <GameBoardWrapper>
            {boardPlaceholder.map((column, columnIndex) =>
                column.map((row, rowIndex) => (
                    <BoardTile
                        key={`${columnIndex},${rowIndex}`}
                        type={row}
                        row={rowIndex}
                        column={columnIndex}
                    />
                )),
            )}
        </GameBoardWrapper>
    );
};

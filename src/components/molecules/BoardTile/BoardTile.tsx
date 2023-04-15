import { useContext, useEffect, useRef, useState } from 'react';

import { GameContext } from '@components/pages/GamePage/GamePage';

import { boardFieldType, generateTileText } from '@utils/board';

import {
    putLetterOnBoard,
    removeLetterFromBoard,
    setActiveLetter,
} from '@store/gameSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

import {
    BoardTileWrapper,
    GameLetterElement,
    TileContent,
} from './BoardTile.styled';

export interface BoardTileProps {
    type: boardFieldType;
    column: number;
    row: number;
}

export const BoardTile = ({ type, column, row }: BoardTileProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const { movedIndex, position, offset } = useContext(GameContext);
    const { activeLetter, board } = useAppSelector((state) => state.game);
    const [isSelected, setIsSelected] = useState(false);

    const letter = board[column][row];
    const isAccepted = letter?.accepted;

    const dispatch = useAppDispatch();

    const handleClickLetter = () => {
        if (!letter || isAccepted) return;
        dispatch(setActiveLetter(letter.key));
        dispatch(
            removeLetterFromBoard({
                column,
                row,
                key: letter.key,
            }),
        );
    };

    const handleMouseOver = () => {
        if (!ref.current || movedIndex === null || letter) return;

        const rect = ref.current.getBoundingClientRect();

        const positionX = position.x + offset.x;
        const positionY = position.y + offset.y;

        if (
            positionX >= rect.left &&
            positionX <= rect.right &&
            positionY >= rect.top &&
            positionY <= rect.bottom
        ) {
            !isSelected && setIsSelected(true);
        } else if (isSelected) {
            isSelected && setIsSelected(false);
        }
    };

    handleMouseOver();

    useEffect(() => {
        if (movedIndex === null && isSelected && activeLetter && !letter) {
            setIsSelected(false);
            dispatch(
                putLetterOnBoard({
                    column,
                    row,
                    key: activeLetter.key,
                }),
            );
        }
    }, [movedIndex]);

    return (
        <BoardTileWrapper
            isAccepted={isAccepted}
            isHovering={isSelected}
            ref={ref}
            type={type}
        >
            <TileContent>
                {letter && (
                    <GameLetterElement
                        active={false}
                        index={letter.key}
                        name={letter.name}
                        setActive={handleClickLetter}
                        value={letter.value}
                    />
                )}
                {generateTileText(type)}
            </TileContent>
        </BoardTileWrapper>
    );
};

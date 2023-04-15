import { GameLetter } from '../Game/GameLetter/GameLetter';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { boardFieldType } from '@utils/board';

import { Letter } from '../Game/GameLetter/GameLetter.styled';

export const TileContent = styled.div(
    ({ theme: { colors } }) => css`
        align-items: center;
        background-color: ${colors.tiles.default};
        display: flex;
        height: 100%;
        justify-content: center;
        position: absolute;
        text-align: center;
        width: 100%;
    `,
);

export const BoardTileWrapper = styled.div<{
    type: boardFieldType;
    isHovering: boolean;
    isAccepted?: boolean;
}>(
    ({ type, theme: { colors }, isHovering, isAccepted }) => css`
        aspect-ratio: 1 / 1;
        color: white;
        font-size: 8px;
        font-weight: bold;
        position: relative;
        text-transform: uppercase;
        width: calc(((100% - 28px) / 15));
        cursor: pointer;

        ${isAccepted && 'pointer-events: none;'}

        ${isHovering &&
        !css`
            ${TileContent} {
                background-color: ${darken(0.1, colors.tiles.default)};
            }
        `}

        ${type &&
        css`
            ${TileContent} {
                z-index: 2;
                background-color: ${colors.tiles[type]};
            }

            &::before {
                background: ${colors.tiles[type]};
                content: '';
                display: block;
                height: 100%;
                left: 0;
                position: absolute;
                rotate: -45deg;
                top: 0;
                width: 100%;
                z-index: 1;
            }

            ${isHovering &&
            css`
                ${TileContent}, &::before {
                    background-color: ${darken(0.1, colors.tiles[type])};
                }
            `}
        `}
    `,
);

export const GameLetterElement = styled(GameLetter)<{
    active: boolean;
}>(
    ({ active }) => css`
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 9;

        ${!active &&
        css`
            ${Letter} {
                width: 100%;
                height: 100%;
            }
        `}
    `,
);

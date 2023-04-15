import styled, { css } from 'styled-components';

export const LetterWrapper = styled.div`
    height: 52px;
    width: 52px;
`;

export const Letter = styled.button<{
    active: boolean;
    isMoved: boolean;
}>(
    ({ theme: { colors }, active, isMoved }) => css`
        align-items: center;
        background-color: ${colors.neutral.white};
        border-radius: 8px;
        border: 1px solid ${colors.neutral.divider};
        cursor: pointer;
        display: flex;
        height: 52px;
        justify-content: center;
        position: relative;
        user-select: none;
        width: 52px;
        ${active && `box-shadow: 0px 0px 0px 2px ${colors.neutral.divider};`}

        &:hover {
            background-color: #f8f8f8;
        }

        ${isMoved &&
        css`
            position: fixed;
            z-index: 9;
        `}
    `,
);

export const LetterLabel = styled.h4`
    font-size: 30px;
    pointer-events: none;
    text-transform: uppercase;
`;

export const LetterValue = styled.p(
    ({ theme: { colors } }) => css`
        bottom: 2px;
        color: ${colors.text.secondary};
        font-size: 12px;
        pointer-events: none;
        position: absolute;
        right: 2px;
    `,
);

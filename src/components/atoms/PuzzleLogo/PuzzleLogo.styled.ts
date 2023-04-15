import styled, { css } from 'styled-components';

export const PuzzleLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Letter = styled.div<{ size: number }>(
    ({ theme: { colors, fontWeight }, size }) => css`
        align-items: center;
        background-color: ${colors.tiles.default};
        border-radius: 4px;
        color: ${colors.text.white};
        display: flex;
        font-size: ${Math.abs(0.55 * size)}px;
        font-weight: ${fontWeight.bold};
        height: ${size}px;
        justify-content: center;
        text-transform: uppercase;
        width: ${size}px;
    `,
);

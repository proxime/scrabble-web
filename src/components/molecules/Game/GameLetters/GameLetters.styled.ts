import styled, { css } from 'styled-components';

export const GameLettersWrapper = styled.div(
    ({ theme: { colors } }) => css`
        background-color: ${colors.background.primary};
        border-radius: 10px;
        display: flex;
        gap: 9px;
        padding: 16px;
    `,
);

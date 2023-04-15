import styled, { css } from 'styled-components';

export const TextButtonElement = styled.button(
    ({ theme: { colors } }) => css`
        background-color: transparent;
        border: none;
        color: ${colors.text.tertiary};
        cursor: pointer;
        margin: 0;
        padding: 0;
    `,
);

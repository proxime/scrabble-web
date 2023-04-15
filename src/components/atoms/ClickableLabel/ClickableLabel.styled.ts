import styled, { css } from 'styled-components';

export const ClickableLabelWrapper = styled.button(
    ({ theme: { colors, font } }) => css`
        background-color: transparent;
        border: none;
        color: ${colors.text.tertiary};
        cursor: pointer;
        font-family: ${font.lato};
        font-size: 14px;
        line-height: 1.4;
        padding: 0;
    `,
);

import { css } from 'styled-components';

export const secondaryButtonCss = css<{ disabled?: boolean }>`
    ${({ theme: { colors }, disabled }) => css`
        background-color: ${colors.buttons.secondary.default};
        border: 2px solid ${colors.buttons.secondary.border};
        color: ${colors.text.white};

        &:hover {
            background-color: ${colors.buttons.secondary.hover};
        }

        ${disabled && secondaryButtonDisabledCss}
    `}
`;

export const secondaryButtonDisabledCss = css`
    ${({ theme: { colors } }) => css`
        background-color: ${colors.buttons.secondary.disabled};
        border-color: ${colors.buttons.secondary.border};
        cursor: default;
        pointer-events: none;
    `}
`;

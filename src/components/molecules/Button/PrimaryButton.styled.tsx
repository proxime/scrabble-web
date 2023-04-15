import { css } from 'styled-components';

export const primaryButtonCss = css<{ disabled?: boolean }>`
    ${({ theme: { colors }, disabled }) => css`
        background-color: ${colors.buttons.primary.default};
        border: 2px solid ${colors.buttons.primary.border};

        &:hover {
            background-color: ${colors.buttons.primary.hover};
        }

        ${disabled && primaryButtonDisabledCss}
    `}
`;

export const primaryButtonDisabledCss = css`
    ${({ theme: { colors } }) => css`
        background-color: ${colors.buttons.primary.disabled};
        color: ${colors.text.secondary};
        cursor: default;
        pointer-events: none;
    `}
`;

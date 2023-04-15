import styled, { css } from 'styled-components';

export const inputErrorState = css(
    ({ theme: { colors } }) => css`
        border-color: ${colors.status.error};
        caret-color: ${colors.status.error};

        &:focus,
        &:hover {
            border-color: ${colors.status.error};
        }
    `,
);

export const inputDisabledState = css(
    ({ theme: { colors } }) => css`
        background-color: ${colors.background.primary};
        color: ${colors.text.secondary};
        border-color: ${colors.neutral.divider};
    `,
);

export const InputWrapper = styled.div<{
    disabled?: boolean;
    error?: boolean;
}>(
    ({ theme: { colors, font }, error, disabled }) => css`
        position: relative;

        input {
            border: 1px solid ${colors.neutral.divider};
            color: ${colors.text.primary};
            font-family: ${font.lato};
            height: 52px;
            line-height: 1.5;
            outline: none;
            padding: 0 16px;
            width: 100%;

            ::placeholder,
            ::-webkit-input-placeholder {
                color: ${colors.text.secondary};
            }

            &:focus {
                border: 2px solid ${colors.tiles.w2};
                padding: 0 15px;
            }

            ${error && inputErrorState}
            ${disabled && inputDisabledState}
        }
    `,
);

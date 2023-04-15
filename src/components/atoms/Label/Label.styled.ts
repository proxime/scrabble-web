import styled, { css } from 'styled-components';

export const LabelWrapper = styled.label<{ disabled?: boolean }>(
    ({ disabled, theme: { colors } }) => css`
        align-items: center;
        color: ${disabled ? colors.text.primary : colors.text.secondary};
        cursor: auto;
        display: flex;
        font-size: 14px;
        line-height: 1.4;
    `,
);

import styled, { css } from 'styled-components';

export const InputMessageWrapper = styled.p(
    ({ theme: { colors } }) => css`
        align-items: flex-start;
        color: ${colors.status.error};
        display: grid;
        font-size: 12px;
        grid-gap: 4px;
        grid-template-columns: auto 1fr;
        line-height: 1.5;
        margin: 0;
    `,
);

export const IconWrapper = styled.span`
    align-items: center;
    display: flex;
    height: 18px;
`;

export const Message = styled.span``;

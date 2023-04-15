import styled, { css } from 'styled-components';

export const AvatarWrapper = styled.div<{ size: number }>(
    ({ theme: { colors }, size }) => css`
        border-radius: 10px;
        border: 1px solid ${colors.neutral.divider};
        display: flex;
        height: ${size}px;
        overflow: hidden;
        padding: ${size / 12.5}px;
        width: ${size}px;
        background-color: ${colors.background.primary};
    `,
);

export const AvatarImage = styled.img`
    border-radius: 10px;
    height: 100%;
    width: 100%;
`;

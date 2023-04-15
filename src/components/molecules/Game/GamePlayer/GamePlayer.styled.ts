import styled, { css } from 'styled-components';

export const GamePlayerWrapper = styled.div(
    ({ theme: { colors } }) => css`
        background-color: ${colors.neutral.white};
        padding: 12px;
    `,
);

export const PlayerHeader = styled.div(
    ({ theme: { colors } }) => css`
        align-items: center;
        border-bottom: 1px solid ${colors.neutral.divider};
        display: flex;
        gap: 8px;
        padding-bottom: 10px;
    `,
);

export const Nickname = styled.p`
    font-size: 18px;
`;

export const PlayerValues = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
`;

export const Points = styled.h4`
    font-size: 26px;
`;

export const Timer = styled.p``;

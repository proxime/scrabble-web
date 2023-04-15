import styled, { css } from 'styled-components';

export const LobbyUsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const UserWrapper = styled.div(
    ({ theme: { colors } }) => css`
        display: flex;
        align-items: center;
        gap: 32px;
        background-color: ${colors.neutral.white};
        padding: 16px 32px;
        border-radius: 12px;
        border: 1px solid ${colors.neutral.divider};
    `,
);

export const Nickname = styled.p`
    font-size: 26px;
`;

import styled, { css } from 'styled-components';

export const LobbyUsersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const UserWrapper = styled.div<{ isEmpty?: boolean }>(
    ({ theme: { colors }, isEmpty }) => css`
        align-items: center;
        background-color: ${colors.neutral.white};
        border-radius: 12px;
        border: 1px solid ${colors.neutral.divider};
        display: flex;
        gap: 32px;
        height: 104px;
        padding: 16px 32px;

        ${isEmpty &&
        css`
            background-color: ${colors.background.secondary};
        `}
    `,
);

export const Nickname = styled.p`
    font-size: 26px;
`;

export const EmptyUserWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
`;

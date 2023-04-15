import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav(
    ({ theme: { colors } }) => css`
        background-color: ${colors.neutral.white};
        border-bottom: 1px solid ${colors.neutral.divider};
        display: flex;
        height: 70px;
        justify-content: center;
        left: 0;
        position: sticky;
        top: 0;
        z-index: 99;
    `,
);

export const NavbarInnerWrapper = styled.div(
    ({ theme: { page } }) => css`
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: space-between;
        max-width: ${page.maxWidth}px;
        padding: 0 ${page.padding.default}px;
        width: 100%;
    `,
);

export const AuthActions = styled.div`
    display: flex;
    gap: 16px;
`;

export const PuzzleLogoWrapper = styled.div`
    width: 220px;

    img {
        width: 100%;
    }
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const UserName = styled.p`
    font-size: 18px;
`;

import styled, { css } from 'styled-components';

export const MainSection = styled.section`
    display: grid;
    gap: 120px;
    grid-template-columns: 1fr 500px;
`;

export const DashboardOrnament = styled.div`
    aspect-ratio: 1 / 1;
    background-image: url('/images/board.png');
    background-size: contain;
    width: 100%;
`;

export const Main = styled.div``;

export const PlayText = styled.h1(
    ({ theme: { colors } }) => css`
        color: ${colors.tiles.default};
    `,
);

export const TitleLetters = styled.div`
    margin-bottom: 64px;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

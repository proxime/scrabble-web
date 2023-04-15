import styled, { css } from 'styled-components';

export const DefaultLayoutWrapper = styled.div`
    display: grid;
    grid-template-rows: 70px 1fr 50px;
    min-height: 100%;
`;

export const ContentWrapper = styled.main(
    ({ theme: { colors } }) => css`
        background-color: ${colors.background.primary};
        display: flex;
        justify-content: center;
    `,
);

export const ContentInnerWrapper = styled.div(
    ({ theme: { page } }) => css`
        height: 100%;
        max-width: ${page.maxWidth}px;
        padding: 70px ${page.padding.default}px;
        width: 100%;
    `,
);

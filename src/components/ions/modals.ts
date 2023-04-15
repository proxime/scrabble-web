import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

/* box-shadow: ${boxShadow.small}; */

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    margin-bottom: 32px;
`;

const Title = styled.h4(
    ({ theme: { font } }) => css`
        font-size: 32px;
    `,
);

const SubTitle = styled.p(
    ({ theme: { colors } }) => css`
        color: ${colors.text.secondary};
    `,
);

// const Description = styled(Typography.TextBody_16_24)<{
//     center?: boolean;
//     color?: ColorType;
// }>(
//     ({ center, color, theme: { colors } }) => css`
//         color: ${color ? colors[color] : colors.text_secondary};

//         ${center && 'text-align: center'}
//     `,
// );

const Content = styled.div`
    width: 100%;
`;

const ButtonsWrapper = styled.div`
    align-items: center;
    column-gap: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    row-gap: 8px;
    width: 100%;
`;

export const Modal = {
    ButtonsWrapper,
    // Description,
    Content,
    Header,
    SubTitle,
    Title,
    Wrapper,
};

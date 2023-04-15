import { rgba } from 'polished';
import styled, { css, keyframes } from 'styled-components';

export const ModalFadeIn = keyframes`
    from{
        opacity: 0
    }
    to{
        opacity: 1
    }
`;

export const ModalWrapper = styled.div(
    ({ theme: { colors } }) => css`
        animation: ${ModalFadeIn} 0.3s forwards;
        background-color: ${rgba(colors.background.modal, 0.85)};
        height: 100vh;
        left: 0;
        outline: 0;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0 16px;
        position: fixed;
        top: 0;
        width: 100%;
        will-change: opacity;
        z-index: 999;
    `,
);

export const InnerWrapper = styled.div<{ width: number }>(
    ({ width }) => css`
        align-items: center;
        display: flex;
        margin: 32px auto;
        max-width: ${width}px;
        min-height: calc(100vh - 64px);
        position: relative;
    `,
);

export const Content = styled.div(
    ({ theme: { colors } }) => css`
        background-color: ${colors.neutral.white};
        border-radius: 4px 4px 0 0;
        padding: 40px 48px;
        position: relative;
        width: 100%;
        z-index: 9;
    `,
);

export const CloseButtonWrapper = styled.div`
    cursor: pointer;
    position: absolute;
    right: 24px;
    top: 20px;
    z-index: 99;
`;

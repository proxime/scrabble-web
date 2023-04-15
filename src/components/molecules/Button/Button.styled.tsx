import styled, { css } from 'styled-components';

import { ButtonSizes, ButtonVariants } from './Button';

// import { Loader } from '@atoms/Loader/Loader';
import { primaryButtonCss } from './PrimaryButton.styled';
import { secondaryButtonCss } from './SecondaryButton.styled';

export const ButtonStyleTypes = {
    primary: primaryButtonCss,
    secondary: secondaryButtonCss,
};

export const smallButtonCss = css`
    height: 40px;
    padding: 0 16px;
`;

export const DefaultButton = styled.button<{
    active?: boolean;
    center?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    isLoading?: boolean;
    minWidth?: number;
    size?: ButtonSizes;
    variant: ButtonVariants;
}>`
    ${({
        theme: { font, fontWeight, colors },
        center,
        fullWidth,
        minWidth,
        size,
        variant,
    }) => css`
        align-items: center;
        border-radius: 8px;
        color: ${colors.text.primary};
        cursor: pointer;
        display: flex;
        font-family: ${font.lato};
        font-size: 16px;
        font-weight: ${fontWeight.bold};
        height: 52px;
        justify-content: center;
        line-height: 1;
        min-width: ${minWidth}px;
        padding: 0 32px;
        position: relative;
        text-transform: uppercase;
        transition: all 0.3s;

        ${variant && ButtonStyleTypes[variant]};
        ${fullWidth && 'width: 100%'};
        ${center && 'margin: 0 auto'};
        ${size === 'small' && smallButtonCss}
    `}
`;

export const ButtonText = styled.span<{ isHidden?: boolean }>`
    visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
`;

// export const AnimatedLoader = styled(Loader)<{ isChildren: boolean }>(
//     ({ isChildren }) => css`
//         margin-right: ${isChildren ? 12 : 0}px;
//         width: 20px;
//     `,
// );

// export const CenteredLoader = styled.div`
//     left: 50%;
//     position: absolute;
//     top: 50%;
//     transform: translate(-50%, -50%);
// `;

import { ButtonHTMLAttributes, forwardRef } from 'react';

// import { Loader } from '@atoms/Loader/Loader';
import { ButtonText, DefaultButton } from './Button.styled';

export type ButtonVariants = 'primary' | 'secondary';

export type ButtonSizes = 'small' | 'default';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    center?: boolean;
    children: string;
    fullWidth?: boolean;
    isLoading?: boolean;
    minWidth?: number;
    size?: ButtonSizes;
    variant?: ButtonVariants;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            active,
            children,
            disabled,
            isLoading,
            minWidth = 164,
            size = 'default',
            variant = 'primary',
            ...rest
        }: ButtonProps,
        ref,
    ) => {
        return (
            <DefaultButton
                {...rest}
                active={active}
                disabled={disabled || isLoading}
                isLoading={isLoading}
                minWidth={minWidth}
                ref={ref}
                size={size}
                variant={variant}
            >
                {/* {isLoading && (
                <CenteredLoader>
                    <Loader color={'secondary'} size={24} />
                </CenteredLoader>
            )} */}
                <ButtonText isHidden={isLoading}>{children}</ButtonText>
            </DefaultButton>
        );
    },
);

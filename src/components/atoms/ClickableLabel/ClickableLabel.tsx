import { ButtonHTMLAttributes } from 'react';

import { ClickableLabelWrapper } from './ClickableLabel.styled';

export interface ClickableLabelProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    onClick: () => void;
}

export const ClickableLabel = ({ children, ...rest }: ClickableLabelProps) => {
    return (
        <ClickableLabelWrapper {...rest} type="button">
            {children}
        </ClickableLabelWrapper>
    );
};

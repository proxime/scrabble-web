import { ButtonHTMLAttributes } from 'react';

import { TextButtonElement } from './TextButton.styled';

export interface TextButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

export const TextButton = ({ children, ...props }: TextButtonProps) => {
    return (
        <TextButtonElement type="button" {...props}>
            {children}
        </TextButtonElement>
    );
};

import React, { LabelHTMLAttributes } from 'react';

import { LabelWrapper } from './Label.styled';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    disabled?: boolean;
}

export const Label = ({ children, disabled }: LabelProps) => {
    return <LabelWrapper disabled={disabled}>{children}</LabelWrapper>;
};

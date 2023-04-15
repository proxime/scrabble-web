import React, { InputHTMLAttributes } from 'react';

import { ClickableLabel } from '@components/atoms/ClickableLabel/ClickableLabel';
import { ErrorMessage } from '@components/atoms/ErrorMessage/ErrorMessage';
import { Label } from '@components/atoms/Label/Label';
import { FieldLabels, FieldWrapper } from '@components/ions/form';

import { generateId } from '@utils/generateId';

import { InputWrapper } from './TextField.styled';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
    type?: 'text' | 'email' | 'password';
    value?: string;
    clickableLabel?: {
        text: string;
        onClick: () => void;
    };
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (
        { className, clickableLabel, error, label, ...rest }: TextFieldProps,
        ref,
    ) => {
        const inputId = rest.id || generateId(rest.name);

        return (
            <FieldWrapper className={className}>
                {(label || clickableLabel) && (
                    <FieldLabels>
                        {label && (
                            <Label disabled={rest.disabled} htmlFor={inputId}>
                                {label}
                            </Label>
                        )}
                        {clickableLabel && (
                            <ClickableLabel onClick={clickableLabel.onClick}>
                                {clickableLabel.text}
                            </ClickableLabel>
                        )}
                    </FieldLabels>
                )}
                <InputWrapper disabled={rest.disabled} error={!!error}>
                    <input {...rest} id={inputId} ref={ref} />
                </InputWrapper>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </FieldWrapper>
        );
    },
);

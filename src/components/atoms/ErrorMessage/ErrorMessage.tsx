import {
    IconWrapper,
    InputMessageWrapper,
    Message,
} from './ErrorMessage.styled';

export interface ErrorMessageProps {
    children: string;
    className?: string;
}

export const ErrorMessage = ({
    children,
    className,
    ...rest
}: ErrorMessageProps) => {
    return (
        <InputMessageWrapper {...rest} className={`input-message ${className}`}>
            {/* {(icon || iconProps) && (
                <IconWrapper>
                    {icon ? (
                        <IconManager
                            fill={[inputMessageColors[variant]]}
                            isLinearElement
                            name={icon}
                            size={16}
                        />
                    ) : iconProps ? (
                        <IconManagerComponent
                            {...iconProps}
                            size={iconProps.size ?? 16}
                            themeColors={{
                                default: {
                                    'color-1':
                                        inputMessageColorsPalette[variant],
                                },
                            }}
                        />
                    ) : undefined}
                </IconWrapper>
            )} */}
            <Message>{children}</Message>
        </InputMessageWrapper>
    );
};

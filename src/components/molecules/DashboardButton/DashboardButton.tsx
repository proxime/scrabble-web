import { ReactNode } from 'react';

import { ThemeType } from '@utils/theme';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DashboardButtonWrapper, IconWrapper } from './DashboardButton.styled';

export interface DashboardButtonProps {
    onClick: () => void;
    iconProps: {
        name: IconProp;
        color: keyof ThemeType['colors']['tiles'];
    };
    children: ReactNode;
}

export const DashboardButton = ({
    children,
    iconProps,
    onClick,
}: DashboardButtonProps) => {
    return (
        <DashboardButtonWrapper onClick={onClick}>
            <IconWrapper color={iconProps.color}>
                <FontAwesomeIcon
                    icon={iconProps.name}
                    color="white"
                    fontSize={'20px'}
                />
            </IconWrapper>
            {children}
        </DashboardButtonWrapper>
    );
};

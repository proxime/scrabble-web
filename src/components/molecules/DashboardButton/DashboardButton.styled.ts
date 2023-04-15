import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { DashboardButtonProps } from './DashboardButton';

export const IconWrapper = styled.div<{
    color: DashboardButtonProps['iconProps']['color'];
}>(
    ({ theme: { colors }, color }) => css`
        align-items: center;
        background-color: ${colors.tiles[color]};
        border-radius: 12px;
        border: 4px solid ${lighten(0.25, colors.tiles[color])};
        box-shadow: 0px 0px 0px 1px ${colors.tiles[color]};
        display: flex;
        height: 42px;
        justify-content: center;
        width: 42px;
    `,
);

export const DashboardButtonWrapper = styled.button(
    ({ theme: { colors, fontWeight } }) => css`
        background-color: transparent;
        border-radius: 8px;
        border: 2px solid ${colors.neutral.divider};
        color: ${colors.text.primary};
        cursor: pointer;
        font-size: 18px;
        font-weight: ${fontWeight.bold};
        height: 68px;
        padding: 0 48px;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 24px;

        &:hover {
            background-color: ${colors.background.secondary};

            ${IconWrapper} {
                transform: scale(1.1);
            }
        }
    `,
);

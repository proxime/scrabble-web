import styled, { css } from 'styled-components';

export const PlayersTableWrapper = styled.div(
    ({ theme: { colors } }) => css`
        background-color: ${colors.neutral.divider};
        border-radius: 10px;
        border: 2px solid ${colors.neutral.divider};
        display: grid;
        gap: 2px;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
    `,
);

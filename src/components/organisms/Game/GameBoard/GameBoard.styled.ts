import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { boardFieldType } from '@utils/board';

export const GameBoardWrapper = styled.div`
    aspect-ratio: 1 / 1;
    background-color: white;
    border: 40px solid #1c4a65;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    max-height: 95vh;
    max-width: 95%;
    padding: 2px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

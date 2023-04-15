import { css } from 'styled-components';

import LatoBold from '@assets/fonts/Lato-Bold.ttf';
import LatoLight from '@assets/fonts/Lato-Light.ttf';
import LatoRegular from '@assets/fonts/Lato-Regular.ttf';

export const globalFonts = css`
    @font-face {
        font-family: 'Lato';
        font-weight: 300;
        src: url(${LatoLight});
    }
    @font-face {
        font-family: 'Lato';
        font-weight: 400;
        src: url(${LatoRegular});
    }
    @font-face {
        font-family: 'Lato';
        font-weight: 700;
        src: url(${LatoBold});
    }
`;

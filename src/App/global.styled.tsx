import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

import { globalFonts } from '@shared/fonts';

export const GlobalStaticStyled = createGlobalStyle(
    ({ theme: { colors, font } }) => css`
        ${normalize}
        ${globalFonts}

    * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            height: 100%;
        }

        body {
            height: 100%;
            margin: 0;
            font-family: ${font.lato};
            color: ${colors.text.primary};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        #root {
            height: 100%;
        }
    `,
);

export const GlobalDynamicStyled = createGlobalStyle<{
    blockScroll: boolean;
}>`
    body {
      ${({ blockScroll }) => blockScroll && 'overflow: hidden;'};
    }
`;

import 'styled-components';

import { ThemeType } from '@utils/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}

export const theme = {
    font: {
        lato: `'Lato', sans-serif`,
    },
    fontWeight: {
        light: 300,
        regular: 400,
        normal: 500,
        bold: 700,
        black: 900,
    },
    page: {
        padding: {
            default: 32,
        },
        maxWidth: 1400,
    },
    colors: {
        tiles: {
            default: '#2e76a6',
            c: '#f9e130',
            w3: '#86d430',
            w2: '#f6dc39',
            l3: '#ed2050',
            l2: '#33306e',
        },
        text: {
            primary: '#464657',
            secondary: '#9292A6',
            tertiary: '#0000cc',
            white: '#ffffff',
        },
        neutral: {
            divider: '#CDCDDB',
            black: '#000000',
            white: '#ffffff',
        },
        status: {
            error: 'red',
        },
        background: {
            primary: '#F4F4FA',
            secondary: '#E6E6F1',
            modal: '#121221',
        },
        buttons: {
            primary: {
                default: '#ffffff',
                hover: '#E6E6F1',
                disabled: 'red',
                border: '#CDCDDB',
            },
            secondary: {
                default: '#00ff55',
                hover: '#00e64d',
                disabled: '#99ffbb',
                border: '#00e64d',
            },
        },
    },
} as const;

export type ThemeType = typeof theme;

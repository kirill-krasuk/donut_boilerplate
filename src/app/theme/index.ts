export const palette = {
    pink: {
        1: '#e84393',
        2: '#FF3F84'
    },
    darkBlue: {
        1: '#191D3A'
    },
    gray : '#E5E5E5',
    white: '#FFFFFF'
} as const;

export const theme = {
    dark: {
        primary  : palette.darkBlue[1],
        secondary: palette.pink[1],

        background: palette.darkBlue[1],
        header    : {
            background: palette.darkBlue[1],
        },

        typography: {
            text: palette.white,
        },

        icon: {
            color: palette.pink[1],
        },
    },
    light: {
        primary  : palette.pink[1],
        secondary: palette.darkBlue[1],

        background: palette.white,
        header    : {
            background: palette.pink[2],
        },

        typography: {
            text: palette.darkBlue[1],
        },

        icon: {
            color: palette.white,
        }
    },
    common: {
        ...palette
    }
} as const;

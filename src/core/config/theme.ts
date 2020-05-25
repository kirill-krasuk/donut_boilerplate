export const palette = {
    pink: {
        1: '#e84393',
        2: '#FF3F84'
    },
    darkBlue: {
        1: '#191D3A'
    },
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

        icon: {
            color: palette.pink[1],
        }
    },
    common: {
        ...palette
    }
} as const;

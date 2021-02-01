import box from 'boxen';

// eslint-disable-next-line no-console
export const appBorder = (content: string) => console.log(box(content, {
    padding: {
        top   : 1,
        right : 10,
        left  : 10,
        bottom: 1
    },
    margin     : 2,
    borderColor: 'magentaBright',
    align      : 'center',

    // @ts-ignore
    borderStyle: 'double'
}));

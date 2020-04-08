type ImageSize = {
    width?: number;
    heigth?: number;
}

type ImageSet = {
    media: {
        minWidth?: number;
        maxWidth?: number;
        size?: ImageSize;
    };

}

export type Props = {
    src: string;
    webp?: boolean;
    set?: ImageSet[];
}

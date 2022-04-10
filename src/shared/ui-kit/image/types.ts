import { PropsWithChildren } from 'react';

type ImageSize = {
    width?: number,
    height?: number
}

type ImageSet = {
    media: {
        minWidth?: number,
        maxWidth?: number,
        size?: ImageSize
    }

}

export type StyledProps = {
    isLoaded?: boolean,
    width?: ImageSize['width'],
    height?: ImageSize['height']
}

export type Props = PropsWithChildren<ImageSize & {
    src: string,
    webp?: boolean,
    alt: string,
    progressive?: boolean,
    loadingWidth?: number,
    set?: ImageSet[]
}>

export type ProgressiveImageProps = PropsWithChildren<Omit<Props, 'progressive'> & {
    isLoaded: boolean,
    handleLoad(): void
}>

export type PictureProps = PropsWithChildren<Pick<Props, 'src' | 'webp'>>

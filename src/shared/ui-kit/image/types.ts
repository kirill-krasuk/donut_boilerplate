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

export type Props = ImageSize & {
    src: string,
    webp?: boolean,
    alt: string,
    progressive?: boolean,
    loadingWidth?: number,
    set?: ImageSet[]
}

export type ProgressiveImageProps = Omit<Props, 'progressive'> & {
    isLoaded: boolean,
    handleLoad(): void
}

export type PictureProps = Pick<Props, 'src' | 'webp'>

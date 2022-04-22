import type { PropsWithChildren } from 'react';

type ImageSize = {
	width?: number,
	height?: number
};

type ImageSet = {
	media: {
		minWidth?: number,
		maxWidth?: number,
		size?: ImageSize
	}
};

type StyledProps = {
	isLoaded?: boolean,
	width?: ImageSize['width'],
	height?: ImageSize['height']
};

type Props = PropsWithChildren<
	ImageSize & {
		src: string,
		webp?: boolean,
		alt: string,
		progressive?: boolean,
		loadingWidth?: number,
		set?: ImageSet[]
	}
>;

type ProgressiveImageProps = PropsWithChildren<
	Omit<Props, 'progressive'> & {
		isLoaded: boolean,
		handleLoad(): void
	}
>;

type PictureProps = PropsWithChildren<Pick<Props, 'src' | 'webp'>>;

export type {
	StyledProps, Props, ProgressiveImageProps, PictureProps
};

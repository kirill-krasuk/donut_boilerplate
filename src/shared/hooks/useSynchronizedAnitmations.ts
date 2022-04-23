import { useRef, useLayoutEffect } from 'react';

let cachedTime: number | null;

export function useSynchronizedAnimations(animationName: string) {
	const ref = useRef();

	useLayoutEffect(() => {
		const animations = document
			.getAnimations()
			.filter(
				(animation: Record<string, any>) => animation.animationName === animationName
			);

		const firstOfTypeAnimation = animations.find(
			(animation: Record<string, any>) => animation?.effect?.target === ref.current
		);

		if (firstOfTypeAnimation) {
			if (firstOfTypeAnimation === animations[0] && cachedTime) {
				firstOfTypeAnimation.currentTime = cachedTime;
			}

			if (firstOfTypeAnimation !== animations[0]) {
				firstOfTypeAnimation.currentTime = animations[0].currentTime;
			}
		}

		return () => {
			if (firstOfTypeAnimation && firstOfTypeAnimation === animations[0]) {
				cachedTime = firstOfTypeAnimation.currentTime;
			}
		};
	}, [ animationName ]);

	return ref;
}

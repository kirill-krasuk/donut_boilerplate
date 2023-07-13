import { useRef, useLayoutEffect } from 'react';

let cachedTime: number | null = null;

function useSynchronizedAnimations<T extends HTMLElement = HTMLElement>(
	animationName: string
) {
	const ref = useRef<T>(null);

	useLayoutEffect(() => {
		const animations = document.getAnimations().filter((animation: Animation) => {
			if (animation instanceof CSSAnimation) {
				return animation.animationName === animationName;
			}

			return false;
		}) as CSSAnimation[];

		const firstOfTypeAnimation = animations.find(
			(animation: CSSAnimation) =>
				(animation.effect as KeyframeEffect)?.target === ref.current
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

export { useSynchronizedAnimations };

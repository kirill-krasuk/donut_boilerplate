/* eslint-disable no-param-reassign */
import { useRef, useLayoutEffect } from 'react';

let cachedTime: CSSNumberish | null = null;

const filterAnimationsByName = (animationName: string) => (animation: Animation) => {
	if (animation instanceof CSSAnimation) {
		return animation.animationName === animationName;
	}

	return false;
};

const findAnimationForElement = (
	animations: CSSAnimation[],
	element: HTMLElement | null
): CSSAnimation | null =>
	animations.find(animation => (animation.effect as KeyframeEffect)?.target === element) ?? null;

const synchronizeAnimationTimes = (targetAnimation: CSSAnimation, animations: CSSAnimation[]) => {
	const isFirstAnimation = targetAnimation === animations[0];

	if (isFirstAnimation && cachedTime !== null) {
		targetAnimation.currentTime = cachedTime;
	}

	if (!isFirstAnimation) {
		targetAnimation.currentTime = animations[0].currentTime;
	}
};

const cacheAnimationTime = (targetAnimation: CSSAnimation, animations: CSSAnimation[]) => {
	if (targetAnimation === animations[0]) {
		cachedTime = targetAnimation.currentTime;
	}
};

function useSynchronizedAnimations<T extends HTMLElement = HTMLElement>(animationName: string) {
	const ref = useRef<T>(null);

	useLayoutEffect(() => {
		const animations = document
			.getAnimations()
			.filter(filterAnimationsByName(animationName)) as CSSAnimation[];

		const targetAnimation = findAnimationForElement(animations, ref.current);

		if (!targetAnimation) return;

		synchronizeAnimationTimes(targetAnimation, animations);

		return () => {
			cacheAnimationTime(targetAnimation, animations);
		};
	}, [ animationName ]);

	return ref;
}

export { useSynchronizedAnimations };

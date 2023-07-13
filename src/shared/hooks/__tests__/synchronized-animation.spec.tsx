// @ts-expect-error
import React, { useEffect }          from 'react';
import { render }                    from '@testing-library/react';

import { useSynchronizedAnimations } from '@shared/hooks/synchronized-animations';

import type { RefObject }            from 'react';

function TestComponent({
	animationName = 'test-animation',
	getRefCallback
}: {
	animationName?: string,
	getRefCallback(ref: RefObject<HTMLDivElement | null>): void
}) {
	const ref = useSynchronizedAnimations<HTMLDivElement>(animationName);

	useEffect(() => {
		getRefCallback(ref);
	}, [ getRefCallback, ref ]);

	return (
		<div
			data-testid='test-element'
			ref={ ref }
			style={ { animationName } }
		>
			inside
		</div>
	);
}

describe('useSynchronizedAnimation', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	// need emulate animation
	// eslint-disable-next-line jest/no-disabled-tests
	it.skip('test_animation_exists', () => {
		expect.assertions(1);

		const ref: RefObject<HTMLDivElement | null> = { current: null };

		render(
			<TestComponent
				getRefCallback={ r => {
					// @ts-expect-error
					ref.current = r?.current;
				} }
			/>
		);

		expect(ref.current).toBeDefined();
	});

	// Tests that the function works correctly when an animation with the given name exists and is the first of its type
	// eslint-disable-next-line jest/no-disabled-tests
	it.skip('test_first_of_type_animation_exists', async () => {
		expect.assertions(1);

		const animationName = 'test-animation';

		const ref: RefObject<HTMLDivElement | null> = { current: null };

		render(
			<TestComponent
				animationName={ animationName }
				getRefCallback={ r => {
					// @ts-expect-error
					ref.current = r?.current;
				} }
			/>
		);

		const animations = (document.getAnimations() as CSSAnimation[]).filter(
			animation => animation.animationName === animationName
		);

		const firstOfTypeAnimation = animations.find(
			animation => (animation.effect as KeyframeEffect)?.target === ref.current
		);
		expect(firstOfTypeAnimation).toBeDefined();
	});
});

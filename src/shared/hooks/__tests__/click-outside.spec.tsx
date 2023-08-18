import React               from 'react';
import { render, screen }  from '@testing-library/react';
import userEvent           from '@testing-library/user-event';

import { useClickOutside } from '@shared/hooks/click-outside';

const handler = jest.fn();

function TestComponent({ mountRef = true }: { mountRef?: boolean }) {
	const elementRef = React.useRef<HTMLDivElement>(null);

	useClickOutside(elementRef, handler);

	return (
		<div>
			<div ref={ mountRef
				? elementRef
				: null }
			>
				inside
			</div>

			<div data-testid='outside'>
				outside
			</div>
		</div>
	);
}

describe('useClickOutside', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should to be called', async () => {
		expect.assertions(1);

		render(<TestComponent />);

		const element = screen.getByTestId('outside');
		await userEvent.click(element);

		expect(handler).toHaveBeenCalledWith(expect.anything());
	});

	it('should not called when ref not mount to element', async () => {
		expect.assertions(1);

		render(<TestComponent mountRef={ false } />);

		const element = screen.getByTestId('outside');
		await userEvent.click(element);

		expect(handler).not.toHaveBeenCalled();
	});

	it('should trigger event listener when click outside', async () => {
		expect.assertions(1);

		const listener = jest.spyOn(document, 'addEventListener');

		render(<TestComponent />);

		const element = screen.getByTestId('outside');
		await userEvent.click(element);

		expect(listener).toHaveBeenCalledWith('mousedown', expect.any(Function));
	});

	it('should trigger remove listener when component was unmounted', async () => {
		expect.assertions(1);

		const listener = jest.spyOn(document, 'removeEventListener');

		const { unmount } = render(<TestComponent />);

		unmount();

		expect(listener).toHaveBeenCalledWith('mousedown', expect.any(Function));
	});
});

import { delay }    from '@server/lib/async';
import { throttle } from '@shared/lib/functions/throttle';

describe('throttle', () => {
	it('should pass with params', () => {
		expect.hasAssertions();

		const mockFn      = jest.fn();
		const throttledFn = throttle(mockFn, 100);

		throttledFn(1, 2, 3);

		expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
	});

	it('should calls with correct params after throttle', async () => {
		expect.hasAssertions();

		const mockFn      = jest.fn();
		const throttledFn = throttle(mockFn, 100);

		throttledFn(1);
		throttledFn(2);
		throttledFn(3);

		expect(mockFn).toHaveBeenCalledTimes(1);
		expect(mockFn).toHaveBeenCalledWith(1);

		await delay(200);

		expect(mockFn.mock.calls).toHaveLength(2);
		expect(mockFn).toHaveBeenCalledWith(3);
	});

	it('should reject all times except first and last', async () => {
		expect.hasAssertions();

		const mockFn      = jest.fn();
		const throttledFn = throttle(mockFn, 100);

		throttledFn(1);
		throttledFn(2);
		throttledFn(3);

		expect(mockFn).toHaveBeenCalledTimes(1);

		await delay(50);

		throttledFn(4);
		throttledFn(5);

		expect(mockFn).toHaveBeenCalledTimes(1);

		await delay(200);

		expect(mockFn).toHaveBeenCalledTimes(2);
		expect(mockFn).toHaveBeenLastCalledWith(5);
	});
});

import { debounce } from '@shared/lib/functions/debounce';

describe('debounce', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('should call with params', () => {
		const mockFn      = jest.fn();
		const debouncedFn = debounce(mockFn, 100);

		debouncedFn(1, 2, 3);

		jest.advanceTimersByTime(200);

		expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
	});

	it('should call only once in end', () => {
		const mockFn      = jest.fn();
		const debouncedFn = debounce(mockFn, 100);

		debouncedFn(1, 2, 3);

		expect(mockFn).not.toHaveBeenCalled();

		jest.advanceTimersByTime(50);

		debouncedFn(4, 5, 6);

		expect(mockFn).not.toHaveBeenCalled();

		jest.advanceTimersByTime(100);

		expect(mockFn).toHaveBeenCalledWith(4, 5, 6);
	});

	it('should flush', () => {
		const mockFn      = jest.fn();
		const debouncedFn = debounce(mockFn, 100);

		debouncedFn(1, 2, 3);

		expect(mockFn).not.toHaveBeenCalled();

		debouncedFn.flush();

		expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
	});

	it('should cancel calling', () => {
		const mockFn      = jest.fn();
		const debouncedFn = debounce(mockFn, 100);

		debouncedFn();
		debouncedFn.cancel();

		expect(mockFn).not.toHaveBeenCalled();
	});
});

import { createActionCreator } from '@shared/lib/redux/functions/actions/action-creator';

type ActionType = {
	type: 'TEST',
	payload: number,
	meta?: {
		test: string
	}
};

describe('actionCreator', () => {
	it('should have object structure', () => {
		const result = createActionCreator<ActionType>()('TEST')(10);

		expect(result).toHaveProperty('payload');
		expect(result.payload).toBe(10);

		expect(result).toHaveProperty('type');
		expect(result.type).toBe('TEST');
	});

	it('should have toString method', () => {
		const actionCreator = createActionCreator<ActionType>()('TEST');

		expect(actionCreator).toHaveProperty('toString');
		expect(actionCreator.toString()).toBe('TEST');
	});

	it('should have meta prop if provided', () => {
		const result = createActionCreator<ActionType>()('TEST')(10, { test: 'meta' });

		expect(result).toHaveProperty('meta');
		expect(result.meta).toHaveProperty('test');
	});
});

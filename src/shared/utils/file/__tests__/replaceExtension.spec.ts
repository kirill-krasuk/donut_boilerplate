import { replaceExtension } from '../replaceExtension';

describe('Replace file extension helper', () => {
	it('should get file path and replace extension correctly', () => {
		const received = 'image.jpg';
		const expected = 'image.webp';

		expect(replaceExtension(received, 'webp')).toBe(expected);
	});

	it('should get file path and replace extension with query params correctly', () => {
		const received = 'image.jpg?resize=300,300';
		const expected = 'image.webp?resize=300,300';

		expect(replaceExtension(received, 'webp')).toBe(expected);
	});

	it('should get file path and replace extension with content hash correctly', () => {
		const received = 'image.cdefa51d.jpg';
		const expected = 'image.cdefa51d.webp';

		expect(replaceExtension(received, 'webp')).toBe(expected);
	});

	it('should get file path and replace extension with content hash and query params correctly', () => {
		const received = 'image.cdefa51d.jpg?resize=300,300';
		const expected = 'image.cdefa51d.webp?resize=300,300';

		expect(replaceExtension(received, 'webp')).toBe(expected);
	});
});

import { replaceExtension } from '../replaceExtension';

describe('Replace file extension helper', () => {
    it('should get file path and replace extension correctly', () => {
        const received = 'image.jpg';
        const expected = 'image.webp';

        expect(replaceExtension(received, 'webp')).toEqual(expected);
    });

    // TODO: fix test
    it.skip('should get file path and replace extension with query params correctly', () => {
        const received = 'image.jpg?resize=300,300';
        const expected = 'image.webp?resize=300,300';

        expect(replaceExtension(received, 'webp')).toEqual(expected);
    });
});

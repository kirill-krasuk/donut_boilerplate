import { interpolate } from '../functions/interpolate';

describe('interpolate string function', () => {
    it('should correctly interpolate', () => {
        const message = 'Hello, {{ $0 }}';
        const values  = [ 'Kirill' ];

        const expected = 'Hello, Kirill';

        expect(interpolate(message, values, '')).toBe(expected);
    });

    it('should interpolate default message if message is undefined', () => {
        const message        = '';
        const defaultMessage = 'Hello, {{ $0 }}';
        const values         = [ 'Kirill' ];

        const expected = 'Hello, Kirill';

        expect(interpolate(message, values, defaultMessage)).toBe(expected);
    });

    it('should interpolate repeated value in string', () => {
        const message = 'Hello, {{ $0 }} {{ $1 }}! How are you, {{ $0 }} {{ $2 }}';
        const values  = [ 'Kirill', 'Krasuk', 'Maksimovich' ];

        const expected = 'Hello, Kirill Krasuk! How are you, Kirill Maksimovich';

        expect(interpolate(message, values)).toBe(expected);
    });

    it('should throw error on invalid interpolation key', () => {
        const message = 'Hello, {{ $0 }} {{ $1 }}! How are you, {{ $0 }} {{ $3 }}';
        const values  = [ 'Kirill', 'Krasuk', 'Maksimovich' ];

        expect(() => {
            interpolate(message, values);
        }).toThrow('Invalid interpolation key: {{ $3 }}, max key is: $2');
    });

    it('should return given string, if string without flags', () => {
        const message = 'Test string without flags';

        expect(interpolate(message, [])).toBe(message);
    });

    it('should return default message without flags, if string is undefined', () => {
        const message = 'Test string without flags';

        expect(interpolate(null, [], message)).toBe(message);
    });
});

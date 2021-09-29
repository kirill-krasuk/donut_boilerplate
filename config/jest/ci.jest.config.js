const baseConfig = require('./jest.config');

module.exports = {
    ...baseConfig,
    reporters: [
        'default',
        [ 'jest-junit', {
            addFileAttribute: 'true'
        } ]
    ],
};

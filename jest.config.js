module.exports = {
    cacheDirectory : './.cache/jest',
    preset         : 'ts-jest',
    testEnvironment: 'jsdom',
    transform      : {
        '.tsx?$': 'ts-jest'
    },
    setupFiles: [
        './src/test/setup.js',
        './src/test/shim.js'
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
    ],
    snapshotSerializers: [
        '<rootDir>/node_modules/enzyme-to-json/serializer'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/test/__mocks__/fileMock.js',
        '/\.module\.s(c|a)ss$/'                                                              : 'identity-obj-proxy',
    }
};

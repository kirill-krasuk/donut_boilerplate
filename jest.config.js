module.exports = {
    cacheDirectory : './.cache/jest',
    preset         : 'ts-jest',
    testEnvironment: 'jsdom',
    transform      : {
        '.tsx?$': 'ts-jest'
    },
    setupFiles: [
        './src/test/setup.ts',
        './src/test/shim.ts'
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
    ],
    testRegex: [
        '(/src/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$'
    ],
    snapshotSerializers: [
        '<rootDir>/node_modules/enzyme-to-json/serializer'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/test/__mocks__/fileMock.js',
        '/\.module\.s(c|a)ss$/'                                                              : 'identity-obj-proxy',
    },
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires. you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.jest.json'
        }
    }
};

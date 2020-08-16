module.exports = {
    cacheDirectory : './.cache/jest',
    preset         : 'ts-jest',
    testEnvironment: 'node',
    transform      : {
        '.tsx?$'    : 'ts-jest',
        '^.+\\.svg$': 'jest-svg-transformer'
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        './test/setup.ts'
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
    ],
    testRegex: [
        // for jest watch matching test files
        '(/src/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$'
    ],
    snapshotSerializers: [
        '<rootDir>/node_modules/enzyme-to-json/serializer'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/file.ts',
        '\\.svg$'                                                                        : '<rootDir>/test/__mocks__/svgr.ts',
        'styled-components/macro'                                                        : 'styled-components',
        '/\.module\.s(c|a)ss$/'                                                          : 'identity-obj-proxy',
        '@core/(.*)'                                                                     : '<rootDir>/src/core/$1',
        '@app/(.*)'                                                                      : '<rootDir>/src/app/$1',
        '@utils/(.*)'                                                                    : '<rootDir>/src/core/utils/$1',
        '@ui-kit/(.*)'                                                                   : '<rootDir>/src/ui-kit/$1',
        '@images/(.*)'                                                                   : '<rootDir>/src/assets/images/$1',
        '@svgs/(.*)'                                                                     : '<rootDir>/src/assets/svgs/$1',
        '@server/(.*)'                                                                   : '<rootDir>/server/$1',
        '@public/(.*)'                                                                   : '<rootDir>/public/$1',
        '@fonts/(.*)'                                                                    : '<rootDir>/src/assets/fonts/$1',
        '@test/(.*)'                                                                     : '<rootDir>/test/$1',
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

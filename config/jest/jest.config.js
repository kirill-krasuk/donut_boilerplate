module.exports = {
    rootDir        : '../../',
    cacheDirectory : './.cache/jest',
    preset         : 'ts-jest',
    testEnvironment: 'node',
    transform      : {
        '^.+\\.(t|j)sx?$': '@swc/jest',
        '^.+\\.svg$'     : 'svg-jest'
    },
    setupFilesAfterEnv: [
        '@testing-library/jest-dom',
        '@testing-library/jest-dom/extend-expect',
        './config/jest/setup.ts'
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
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/file.ts',
        '\\.svg$'                                                                        : '<rootDir>/test/__mocks__/svgr.ts',
        'styled-components/macro'                                                        : 'styled-components',
        '/\.module\.s(c|a)ss$/'                                                          : 'identity-obj-proxy',
        '@client/(.*)'                                                                   : '<rootDir>/core/client$1',
        '@shared/(.*)'                                                                   : '<rootDir>/src/shared/$1',
        '@entities/(.*)'                                                                 : '<rootDir>/src/entities/$1',
        '@features/(.*)'                                                                 : '<rootDir>/src/features/$1',
        '@widgets/(.*)'                                                                  : '<rootDir>/src/widgets/$1',
        '@processes/(.*)'                                                                : '<rootDir>/src/processes/$1',
        '@lib/(.*)'                                                                      : '<rootDir>/src/shared/lib/$1',
        '@app/(.*)'                                                                      : '<rootDir>/src/app/$1',
        '@utils/(.*)'                                                                    : '<rootDir>/src/shared/utils/$1',
        '@types/(.*)'                                                                    : '<rootDir>/src/shared/types/$1',
        '@enums/(.*)'                                                                    : '<rootDir>/src/shared/enums/$1',
        '@hooks/(.*)'                                                                    : '<rootDir>/src/shared/hooks/$1',
        '@ui-kit/(.*)'                                                                   : '<rootDir>/src/shared/ui-kit/$1',
        '@images/(.*)'                                                                   : '<rootDir>/assets/images/$1',
        '@svgs/(.*)'                                                                     : '<rootDir>/assets/svgs/$1',
        '@server/(.*)'                                                                   : '<rootDir>/core/server/$1',
        '@public/(.*)'                                                                   : '<rootDir>/public/$1',
        '@fonts/(.*)'                                                                    : '<rootDir>/assets/fonts/$1',
        '@test/(.*)'                                                                     : '<rootDir>/test/$1',
        '@env/(.*)'                                                                      : '<rootDir>/config/env/$1'
    },
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires. you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        'ts-jest': {
            tsconfig: '<rootDir>/config/jest/tsconfig.json'
        },
        __IS_DEV__   : true,
        __IS_PROD__  : false,
        __IS_SERVER__: false,
        __IS_CLIENT__: true
    }
};

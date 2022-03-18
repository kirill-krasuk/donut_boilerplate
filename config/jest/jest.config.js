const { pathsToModuleNameMapper } = require('ts-jest');
const ts                          = require('typescript');

const tsconfig = ts.readConfigFile('./tsconfig.json', ts.sys.readFile).config;

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
        ...pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { prefix: '<rootDir>/' })
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

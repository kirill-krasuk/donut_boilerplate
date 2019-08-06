module.exports = {
    setupFiles: [
        './src/test/setup.js'
    ],
    snapshotSerializers: [
        '<rootDir>/node_modules/enzyme-to-json/serializer'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/test/__mocks__/fileMock.js',
        '/\.module\.s(c|a)ss$/'                                                              : 'identity-obj-proxy',
    }
};

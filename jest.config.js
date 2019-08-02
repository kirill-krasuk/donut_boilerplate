module.exports = {
    setupFiles: [
        './src/test/setup.js'
    ],
    snapshotSerializers: [
        '<rootDir>/node_modules/enzyme-to-json/serializer'
    ],
    moduleNameMapper: {
        '/\.module\.s(c|a)ss$/': 'identity-obj-proxy'
    }
};

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
    },
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: [
        '<rootDir>/test/support/testing-library/setupTests.cjs',
    ],
};

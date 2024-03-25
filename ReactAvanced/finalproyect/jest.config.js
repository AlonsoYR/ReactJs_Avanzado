module.exports = {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        '^.+\\.(js|jsx|svg)$': '<rootDir>/node_modules/react-svg/transform.js',
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '\\.(svg)$': '<rootDir>/__mocks__/svg.js',
      },
}
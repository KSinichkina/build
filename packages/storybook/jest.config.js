// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

// eslint-disable-next-line no-undef
module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/**/*.stories.{js,jsx,mjs}',
  ],
  coverageDirectory: 'coverage',

  moduleFileExtensions: ['js', 'json', 'jsx'],

  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],

  verbose: false,

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|mp3|ico)$': '<rootDir>/config/jest/mock/file.mock.js',
    '\\.(svg)$': '<rootDir>/config/jest/mock/svg.mock.js',
    '\\.(css|scss)$': '<rootDir>/config/jest/mock/style.mock.js',
    '^lodash-es': 'lodash',
  },
};

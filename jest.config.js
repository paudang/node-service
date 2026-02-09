module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  testMatch: ['**/*.test.ts', '**/*.test.js'],
  preset: 'ts-jest',
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ]
};

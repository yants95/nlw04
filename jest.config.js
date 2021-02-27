module.exports = {
  roots: ['<rootDir>/src/tests'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/tests/**/index.ts',
    '!<rootDir>/src/tests/**/mocks/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/src/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
}

// https://jestjs.io/docs/en/configuration.html
module.exports = {
  verbose: true,
  clearMocks: false,

  // 收集测试报告
  collectCoverage: true,
  collectCoverageFrom: ["lib/**/*.{ts,tsx}","!**/node_modules/**"], // 从哪些文件生成报告
  coverageDirectory: "coverage", // 生成报告存放目录
  coverageReporters: ["lcov", "text"], // 生成的报告类型
  
  reporters: ["default", "jest-junit"],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/test/__mocks__/styleMock.js"
  },
  testMatch: ['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
  transform: {
    "^.+(unit)?\\.(js|jsx)$": "babel-jest",
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"]
} 
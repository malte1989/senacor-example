module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,js,vue}",
    "!**/node_modules/**",
    "!src/main.ts",
  ],
  setupTestFrameworkScriptFile: "./public/config.js",
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
};

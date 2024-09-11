/* eslint-disable */
export default {
  displayName: 'gcirone-site',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageReporters: ['lcovonly', 'html', 'text-summary'],
  coverageDirectory: '../../coverage/apps/gcirone-site',
  cacheDirectory: `${process.cwd()}/node_modules/.cache/jest`
};

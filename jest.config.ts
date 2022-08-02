const { getJestProjects } = require('@nrwl/jest');

export default {
  cacheDirectory: `${process.cwd()}/node_modules/.cache/jest`,
  projects: getJestProjects(),
};

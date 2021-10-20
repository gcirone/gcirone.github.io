const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  cacheDirectory: `${process.cwd()}/node_modules/.cache/jest`,
  projects: getJestProjects(),
};

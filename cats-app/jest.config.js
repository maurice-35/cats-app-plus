// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};
// // A map from regular expression to module names
//   moduleNameMapper: {
//     "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
//   }

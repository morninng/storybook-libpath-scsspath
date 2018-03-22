
const path = require('path');
const genDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {

  const config = genDefaultConfig(baseConfig, env);
  const lib_path = path.join( __dirname ,  "../src/lib" );
  config.resolve.alias['@lib-path'] = lib_path;

  return config;
};
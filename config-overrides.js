const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast');
// const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireOptimize = require('react-app-rewire-optimize');
const rewireVendorSplitting = require("react-app-rewire-vendor-splitting");
const rewirePreloadPlugin = require('react-app-rewire-preload-plugin')


module.exports = function override(config, env) {
  config = rewireInlineImportGraphqlAst(config, env);
  config = rewirePreloadPlugin(config, env)
  config = rewireVendorSplitting(config, env);
  config = rewireOptimize(config, env)
  // config = rewireStyledComponents(config, env);
  
  return config;
}
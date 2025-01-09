require("ts-node").register({
  project: "tsconfig.commonjs.json",
});

module.exports = require("./webpack.config.ts").default;

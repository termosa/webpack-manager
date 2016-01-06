var assert = require("chai").assert;
var webpackManager = require("../webpack-manager");

describe("Webpack Manager API", function() {
  it("should be a function", function() {
    assert.isFunction(webpackManager);
  });
});

var assert = require("chai").assert;
var webpackManager = require("../webpack-manager");

describe("Webpack Manager API", function() {
  describe("Initialization", function() {
    it("should be a function", function() {
      assert.isFunction(webpackManager);
    });

    it("should init with an empty object", function() {
      var expect = {};
      assert.deepEqual(webpackManager().setup(), expect);
    });

    it("should clone the passed object", function() {
      var source = { a: 1, b: { c: 3 }};
      var expect = { a: 1, b: { c: 3 }};
      var manager = webpackManager(source);
      assert.deepEqual(manager.setup(), expect);
      source.b.c = 4;
      assert.deepEqual(manager.setup(), expect);
    });
  });

  describe("Setters", function() {
    var propName = "plugins";

    it("should set the value to the property on call", function() {
      var expect = {}; expect[propName] = "value";
      var manager = webpackManager();
      manager[propName]("value");
      assert.deepEqual(manager.setup(), expect);
    });

    it("should set the nested value to the property on call", function() {
      var expect = {}; expect[propName] = { prop: "value" };
      var manager = webpackManager();
      manager[propName]("prop", "value");
      assert.deepEqual(manager.setup(), expect);
    });

    it("should extend property with the passed object", function() {
      var expect = {}; expect[propName] = { a: 1, b: 2 };
      var source = {}; source[propName] = { a: 1 };
      var manager = webpackManager(source);
      manager[propName]({ b: 2 });
      assert.deepEqual(manager.setup(), expect);
    });

    it("should create a list of items when calling add method", function() {
      var expect = {}; expect[propName] = [ 1 ];
      var manager = webpackManager();
      manager[propName].add(1);
      assert.deepEqual(manager.setup(), expect);
    });

    it("should concatenate the list when calling add several times", function() {
      var expect = {}; expect[propName] = [ 1, 2 ];
      var manager = webpackManager();
      manager[propName].add(1);
      manager[propName].add(2);
      assert.deepEqual(manager.setup(), expect);
    });

    it("should concatenate the list when array is passed", function() {
      var expect = {}; expect[propName] = [ 1, 2, 3 ];
      var manager = webpackManager();
      manager[propName].add(1);
      manager[propName].add([2, 3]);
      assert.deepEqual(manager.setup(), expect);
    });
  });
});

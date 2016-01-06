Webpack Manager
========================================================================

[![NPM version](https://badge.fury.io/js/webpack-manager.svg)](http://badge.fury.io/js/webpack-manager)
[![Build Status](https://travis-ci.org/termosa/webpack-manager.svg?branch=master)](https://travis-ci.org/termosa/webpack-manager)
[![Join the chat at https://gitter.im/termosa/webpack-manager](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/termosa/webpack-manager)

Simple API to extend and generate complex Webpack configurations

Installation
------------

To install Webpack Manager, simply:

```bash
$ npm install --save webpack-manager
```

API
---

**Webpack Manager** uses [Setup Manager](https://github.com/termosa/setup-manager#api) and it has all it's API as a result.

In addition it has several other methods to simplify your experience with Webpack.
All of them are just two kind of methods: **setters** and **getters**.

#### Setters

```javascript
var manager = require("webpack-manager")();
manager.setter_name([ name, ] value);
manager.setter_name.nested_setter_name([ name, ] value);
```

This are nested functions that sets the property with the same path

```javascript
var config = require("webpack-manager")();

config.entry("./index");

// To set nested properties you can specify the key and the value
config.resolve.alias("component", "./bower_components");

// or give an object as an argument
config.resolve.alias({ component: "./bower_components" });

module.exports = config.setup();

/* Will resolve in:
 * {
 *   "context": "./index",
 *   "resolve": {
 *     "alias": { "component": "./bower_components" }
 *   }
 * }
 */
```

And it extends exists value:

```javascript
var config = require("webpack-manager")();

var alias = config.resolve.alias;

alias("style", "./assets/styles");
alias({ component: "./bower_components" });

module.exports = config.setup();

/* Will resolve in:
 * {
 *   "resolve": {
 *     "alias": {
 *       "style": "./assets/styles",
 *       "component": "./bower_components"
 *     }
 *   }
 * }
 */
```

#### Adders

```javascript
var manager = require("webpack-manager")();
manager.setter_name.add(items);
```

This functions creates an array for the property and pushes passed values in it. They are always nested to **setters** and exists only for Webpack properties that can be defined as array.

```javascript
var webpack = require("webpack");
var config = require("webpack-manager")();

// Setting array with setter method
config.entry(["./index", "./mobile"]);

// Setting array with adder method
config.module.loaders.add({ test: /\.css$/, loader: "style!css" });
config.module.loaders.add([
  { test: /\.js$/, loader: "babel" },
  { test: /\.coffee$/, loader: "coffee" }
]);

module.exports = config.setup();

/* Will resolve in:
 * {
 *   "entry": [ "./index", "./mobile" ],
 *   "module": {
 *     "loaders": [
 *       { "test": /\.css$/, "loader": "style!css" },
 *       { "test": /\.js$/, "loader": "babel" },
 *       { "test": /\.coffee$/, "loader": "coffee" }
 *     ]
 *   }
 * }
 */
```

#### Methods

Here is the list of all methods related to Webpack configuration:

```javascript
manager.context([ name, ] value);
manager.entry([ name, ] value);
manager.entry.add(items);
manager.externals([ name, ] value);
manager.externals.add(items);
manager.target([ name, ] value);
manager.bail([ name, ] value);
manager.profile([ name, ] value);
manager.cache([ name, ] value);
manager.debug([ name, ] value);
manager.devtool([ name, ] value);
manager.node([ name, ] value);
manager.amd([ name, ] value);
manager.loader([ name, ] value);
manager.recordsPath([ name, ] value);
manager.recordsInputPath([ name, ] value);
manager.recordsOutputPath([ name, ] value);
manager.plugins([ name, ] value);
manager.plugins.add(items);
manager.watch([ name, ] value);
manager.watchOptions([ name, ] value);
manager.watchOptions.aggregateTimeout([ name, ] value);
manager.watchOptions.poll([ name, ] value);

manager.output([ name, ] value);
manager.output.path([ name, ] value);
manager.output.filename([ name, ] value);
manager.output.chunkFilename([ name, ] value);
manager.output.sourceMapFilename([ name, ] value);
manager.output.devtoolModuleFilenameTemplate([ name, ] value);
manager.output.devtoolFallbackModuleFilenameTemplate([ name, ] value);
manager.output.devtoolLineToLine([ name, ] value);
manager.output.hotUpdateChunkFilename([ name, ] value);
manager.output.hotUpdateMainFilename([ name, ] value);
manager.output.publicPath([ name, ] value);
manager.output.jsonpFunction([ name, ] value);
manager.output.hotUpdateFunction([ name, ] value);
manager.output.pathinfo([ name, ] value);
manager.output.library([ name, ] value);
manager.output.libraryTarget([ name, ] value);
manager.output.umdNamedDefine([ name, ] value);
manager.output.sourcePrefix([ name, ] value);
manager.output.crossOriginLoading([ name, ] value);

manager.module([ name, ] value);
manager.module.loaders([ name, ] value);
manager.module.loaders.add(items);
manager.module.preLoaders([ name, ] value);
manager.module.preLoaders.add(items);
manager.module.postLoaders([ name, ] value);
manager.module.postLoaders.add(items);
manager.module.noParse([ name, ] value);
manager.module.noParse.add(items);
manager.module.unknownContextRequest([ name, ] value);
manager.module.unknownContextRecursive([ name, ] value);
manager.module.unknownContextRegExp([ name, ] value);
manager.module.unknownContextCritical([ name, ] value);
manager.module.exprContextRequest([ name, ] value);
manager.module.exprContextRegExp([ name, ] value);
manager.module.exprContextRecursive([ name, ] value);
manager.module.exprContextCritical([ name, ] value);
manager.module.wrappedContextRegExp([ name, ] value);
manager.module.wrappedContextRecursive([ name, ] value);
manager.module.wrappedContextCritical([ name, ] value);

manager.resolve([ name, ] value);
manager.resolve.alias([ name, ] value);
manager.resolve.root([ name, ] value);
manager.resolve.modulesDirectories([ name, ] value);
manager.resolve.modulesDirectories.add(items);
manager.resolve.fallback([ name, ] value);
manager.resolve.fallback.add(items);
manager.resolve.extensions([ name, ] value);
manager.resolve.extensions.add(items);
manager.resolve.packageMains([ name, ] value);
manager.resolve.packageMains.add(items);
manager.resolve.packageAlias([ name, ] value);
manager.resolve.unsafeCache([ name, ] value);
manager.resolve.unsafeCache.add(items);

manager.resolveLoader([ name, ] value);
manager.resolveLoader.alias([ name, ] value);
manager.resolveLoader.root([ name, ] value);
manager.resolveLoader.modulesDirectories([ name, ] value);
manager.resolveLoader.modulesDirectories.add(items);
manager.resolveLoader.fallback([ name, ] value);
manager.resolveLoader.fallback.add(items);
manager.resolveLoader.extensions([ name, ] value);
manager.resolveLoader.extensions.add(items);
manager.resolveLoader.packageMains([ name, ] value);
manager.resolveLoader.packageMains.add(items);
manager.resolveLoader.packageAlias([ name, ] value);
manager.resolveLoader.unsafeCache([ name, ] value);
manager.resolveLoader.unsafeCache.add(items);
manager.resolveLoader.moduleTemplates([ name, ] value);
manager.resolveLoader.moduleTemplates.add(items);

manager.devServer([ name, ] value);
manager.devServer.host([ name, ] value);
manager.devServer.port([ name, ] value);
manager.devServer.contentBase([ name, ] value);
manager.devServer.hot([ name, ] value);
manager.devServer.historyApiFallback([ name, ] value);
manager.devServer.proxy([ name, ] value);
manager.devServer.proxy.add(items);
manager.devServer.quiet([ name, ] value);
manager.devServer.noInfo([ name, ] value);
manager.devServer.lazy([ name, ] value);
manager.devServer.filename([ name, ] value);
manager.devServer.watchOptions([ name, ] value);
manager.devServer.watchOptions.aggregateTimeout([ name, ] value);
manager.devServer.watchOptions.poll([ name, ] value);
manager.devServer.publicPath([ name, ] value);
manager.devServer.headers([ name, ] value);
manager.devServer.stats([ name, ] value);
```


var setupManager = require("setup-manager");

function toString(object) {
  return Object.prototype.toString.call(object);
}

function isObject(variable) {
  return typeof variable === "object";
}

function isArray(variable) {
  return isObject(variable) && toString(variable) === "[object Array]";
}

function createSetter(manager, property, withAdd) {
  var builder = manager.set(property);

  function set(name, value) {
    builder(name, value);
    return manager;
  }

  if (withAdd) {
    set.add = function(values) {
      if (!isArray(values)) { values = [values]; }
      manager.set(property, values);
    };
  }

  return set;
}

module.exports = function(instance) {
  var manager = setupManager(instance);

  manager.context = createSetter(manager, "context");
  manager.entry = createSetter(manager, "entry", true);
  manager.externals = createSetter(manager, "externals", true);
  manager.target = createSetter(manager, "target");
  manager.bail = createSetter(manager, "bail");
  manager.profile = createSetter(manager, "profile");
  manager.cache = createSetter(manager, "cache");
  manager.watch = createSetter(manager, "watch");
  manager.watchOptions = createSetter(manager, "watchOptions");
  manager.watchOptions = createSetter(manager, "watchOptions");
  manager.debug = createSetter(manager, "debug");
  manager.devtool = createSetter(manager, "devtool");
  manager.node = createSetter(manager, "node");
  manager.amd = createSetter(manager, "amd");
  manager.loader = createSetter(manager, "loader");
  manager.recordsPath = createSetter(manager, "recordsPath");
  manager.recordsInputPath = createSetter(manager, "recordsInputPath");
  manager.recordsOutputPath = createSetter(manager, "recordsOutputPath");
  manager.plugins = createSetter(manager, "plugins", true);

  var output = createSetter(manager, "output");
  manager.output = output;
  output.path = createSetter(manager, "output.path");
  output.filename = createSetter(manager, "output.filename");
  output.chunkFilename = createSetter(manager, "output.chunkFilename");
  output.sourceMapFilename = createSetter(manager, "output.sourceMapFilename");
  output.devtoolModuleFilenameTemplate = createSetter(manager, "output.devtoolModuleFilenameTemplate");
  output.devtoolFallbackModuleFilenameTemplate = createSetter(manager, "output.devtoolFallbackModuleFilenameTemplate");
  output.devtoolLineToLine = createSetter(manager, "output.devtoolLineToLine");
  output.hotUpdateChunkFilename = createSetter(manager, "output.hotUpdateChunkFilename");
  output.hotUpdateMainFilename = createSetter(manager, "output.hotUpdateMainFilename");
  output.publicPath = createSetter(manager, "output.publicPath");
  output.jsonpFunction = createSetter(manager, "output.jsonpFunction");
  output.hotUpdateFunction = createSetter(manager, "output.hotUpdateFunction");
  output.pathinfo = createSetter(manager, "output.pathinfo");
  output.library = createSetter(manager, "output.library");
  output.libraryTarget = createSetter(manager, "output.libraryTarget");
  output.umdNamedDefine = createSetter(manager, "output.umdNamedDefine");
  output.sourcePrefix = createSetter(manager, "output.sourcePrefix");
  output.crossOriginLoading = createSetter(manager, "output.crossOriginLoading");

  var module = createSetter(manager, "module");
  manager.module = module;
  module.loaders = createSetter(manager, "module.loaders", true);
  module.preLoaders = createSetter(manager, "module.preLoaders", true);
  module.postLoaders = createSetter(manager, "module.postLoaders", true);
  module.noParse = createSetter(manager, "module.noParse", true);
  module.unknownContextRequest = createSetter(manager, "module.unknownContextRequest");
  module.unknownContextRecursive = createSetter(manager, "module.unknownContextRecursive");
  module.unknownContextRegExp = createSetter(manager, "module.unknownContextRegExp");
  module.unknownContextCritical = createSetter(manager, "module.unknownContextCritical");
  module.exprContextRequest = createSetter(manager, "module.exprContextRequest");
  module.exprContextRegExp = createSetter(manager, "module.exprContextRegExp");
  module.exprContextRecursive = createSetter(manager, "module.exprContextRecursive");
  module.exprContextCritical = createSetter(manager, "module.exprContextCritical");
  module.wrappedContextRegExp = createSetter(manager, "module.wrappedContextRegExp");
  module.wrappedContextRecursive = createSetter(manager, "module.wrappedContextRecursive");
  module.wrappedContextCritical = createSetter(manager, "module.wrappedContextCritical");

  var resolve = createSetter(manager, "resolve");
  manager.resolve = resolve;
  resolve.alias = createSetter(manager, "resolve.alias");
  resolve.root = createSetter(manager, "resolve.root");
  resolve.modulesDirectories = createSetter(manager, "resolve.modulesDirectories", true);
  resolve.fallback = createSetter(manager, "resolve.fallback", true);
  resolve.extensions = createSetter(manager, "resolve.extensions", true);
  resolve.packageMains = createSetter(manager, "resolve.packageMains", true);
  resolve.packageAlias = createSetter(manager, "resolve.packageAlias");
  resolve.unsafeCache = createSetter(manager, "resolve.unsafeCache", true);

  var resolveLoader = createSetter(manager, "resolveLoader");
  manager.resolveLoader = resolveLoader;
  resolveLoader.alias = createSetter(manager, "resolveLoader.alias");
  resolveLoader.root = createSetter(manager, "resolveLoader.root");
  resolveLoader.modulesDirectories = createSetter(manager, "resolveLoader.modulesDirectories", true);
  resolveLoader.fallback = createSetter(manager, "resolveLoader.fallback", true);
  resolveLoader.extensions = createSetter(manager, "resolveLoader.extensions", true);
  resolveLoader.packageMains = createSetter(manager, "resolveLoader.packageMains", true);
  resolveLoader.packageAlias = createSetter(manager, "resolveLoader.packageAlias");
  resolveLoader.unsafeCache = createSetter(manager, "resolveLoader.unsafeCache", true);
  resolveLoader.moduleTemplates = createSetter(manager, "resolveLoader.moduleTemplates", true);

  var devServer = createSetter(manager, "devServer");
  manager.devServer = devServer;
  devServer.host = createSetter(manager, "devServer.host");
  devServer.port = createSetter(manager, "devServer.port");
  devServer.contentBase = createSetter(manager, "devServer.contentBase");
  devServer.hot = createSetter(manager, "devServer.hot");
  devServer.historyApiFallback = createSetter(manager, "devServer.historyApiFallback");
  devServer.proxy = createSetter(manager, "devServer.proxy", true);
  devServer.quiet = createSetter(manager, "devServer.quiet");
  devServer.noInfo = createSetter(manager, "devServer.noInfo");
  devServer.lazy = createSetter(manager, "devServer.lazy");
  devServer.filename = createSetter(manager, "devServer.filename");
  devServer.watchOptions = createSetter(manager, "devServer.watchOptions");
  devServer.watchOptions.aggregateTimeout = createSetter(manager, "devServer.watchOptions.aggregateTimeout");
  devServer.watchOptions.poll = createSetter(manager, "devServer.watchOptions.poll");
  devServer.publicPath = createSetter(manager, "devServer.publicPath");
  devServer.headers = createSetter(manager, "devServer.headers");
  devServer.stats = createSetter(manager, "devServer.stats");

  return manager;
}

var path = require("path");
var setupManager = require("setup-manager");
var absolute = function(pathname) { return path.resolve(pathname); };

function isArray(object) { return object instanceof Array; }
function isString(object) {
  return typeof object == "string" || object instanceof String;
}

module.exports = function(instance) {
  var manager = setupManager(instance);

  /* ===== Output ===== */

  manager.setOutputPath = function(path) {
    manager.set("output.path", absolute(path));
    return manager;
  };

  manager.setOutputFilename = function(filename) {
    manager.set("output.filename", filename);
    return manager;
  };

  manager.setOutputChunkFilename = function(chunkFilename) {
    manager.set("output.chunkFilename", chunkFilename);
    return manager;
  };

  manager.setOutputMapFilename = function(mapFilename) {
    manager.set("output.mapFilename", mapFilename);
    return manager;
  };

  /*
   * Output:
   * sourceMapFilename
   * devtoolModuleFilenameTemplate
   * devtoolLineToLine
   * hotUpdateChunkFilename
   * hotUpdateMainFilename
   * jsonpFunction
   * hotUpdateFunction
   */

  manager.setOutputPublicPath = function(path) {
    manager.set("output.publicPath", path);
    return manager;
  };

  manager.setOutputPathinfo = function(pathinfo) {
    manager.set("output.pathinfo", pathinfo);
    return manager;
  };

  manager.setOutputLibrary = function(library) {
    manager.set("output.library", library);
    return manager;
  };

  manager.setOutputLibraryTarget = function(libraryTarget) {
    manager.set("output.libraryTarget", libraryTarget);
    return manager;
  };

  manager.setOutputUmdNamedDefine = function(umdNamedDefine) {
    manager.set("output.umdNamedDefine", umdNamedDefine);
    return manager;
  };

  manager.setOutputSourcePrefix = function(sourcePrefix) {
    manager.set("output.sourcePrefix", sourcePrefix);
    return manager;
  };

  manager.setOutputCrossOriginLoading = function(crossOriginLoading) {
    manager.set("output.crossOriginLoading", crossOriginLoading);
    return manager;
  };

  /* ===== Module ===== */

  manager.setModule = function(name, module) {
    manager.set("module." + name, module);
    return manager;
  };

  manager.addLoader = function(loaders) {
    if (!isArray(loaders)) { loaders = [loaders]; }
    manager.set("module.loaders", loaders);
    return manager;
  };

  manager.addPreLoader = function(loaders) {
    if (!isArray(loaders)) { loaders = [loaders]; }
    manager.set("module.preLoaders", loaders);
    return manager;
  };

  manager.addPostLoader = function(loaders) {
    if (!isArray(loaders)) { loaders = [loaders]; }
    manager.set("module.postLoaders", loaders);
    return manager;
  };

  manager.addNoParse = function(rules) {
    var exists = manager.get("module.noParse") || [];
    manager.set("module.noParse", exists.concat(rules));
    return manager;
  };

  /* ===== Resolve ===== */

  manager.setAlias = function(name, alias) {
    manager.set("resolve.alias." + name, alias);
    return manager;
  };

  manager.setAliases = function(aliases) {
    manager.set("resolve.alias", aliases);
    return manager;
  };

  manager.setResolveRoot = function(path) {
    manager.set("resolve.root", absolute(path));
    return manager;
  };

  manager.addResolveModulesDirectory = function(dirs) {
    if (!isArray(dirs)) { dirs = [dirs]; }
    manager.set("resolve.modulesDirectories", dirs);
    return manager;
  };

  manager.addResolveFallback = function(dirs) {
    if (!isArray(dirs)) { dirs = [dirs]; }
    dirs = dirs.map(absolute);
    manager.set("resolve.fallback", dirs);
    return manager;
  };

  manager.addResolveExtension = function(extensions) {
    if (!isArray(extensions)) { extensions = [extensions]; }
    manager.set("resolve.extensions", extensions);
    return manager;
  };

  manager.addResolvePackageMain = function(mains) {
    if (!isArray(mains)) { mains = [mains]; }
    manager.set("resolve.packageMains", mains);
    return manager;
  };

  manager.addResolvePackageAlias = function(aliases) {
    if (!isArray(aliases)) { aliases = [aliases]; }
    manager.set("resolve.packageAlias", aliases);
    return manager;
  };

  manager.setResolveUnsafeCache = function(unsafeCache) {
    manager.set("resolve.unsafeCache", unsafeCache);
    return manager;
  };

  manager.addResolveUnsafeCache = function(rules) {
    if (!isArray(rules)) { rules = [rules]; }
    manager.set("resolve.unsafeCache", rules);
    return manager;
  };

  /* ===== ResolveLoader ===== */

  /*
   * Same as for loaders
   * + moduleTemplates
   */

  /* ===== Other ===== */

  manager.setContext = function(context) {
    manager.set("context", absolute(context));
    return manager;
  };

  manager.setEntry = function(name, path) {
    var entry = {};
    entry[name] = path;
    manager.set("entry", entry);
    return manager;
  };

  manager.addEntry = function(entries) {
    if (!isArray(entries)) { entries = [entries]; }
    entries = entries.reduce(function(entries, entry) {
      entries[entry.match(/([^\/]+)$/).pop()] = entry;
      return entries;
    }, {});
    manager.set("entry", entries);
    return manager;
  };

  manager.setExternal = function(name, value) {
    var external = {};
    external[name] = value;
    manager.set("externals", [external]);
    return manager;
  };

  manager.addExternal = function(externals) {
    if (!isArray(externals)) { externals = [externals]; }
    manager.set("externals", externals);
    return manager;
  };

  manager.setTarget = function(target) {
    manager.set("target", target);
    return manager;
  };

  manager.setBail = function(bail) {
    manager.set("bail", bail);
    return manager;
  };

  manager.setProfile = function(profile) {
    manager.set("profile", profile);
    return manager;
  };

  manager.setCache = function(cache) {
    manager.set("cache", cache);
    return manager;
  };

  manager.setWatch = function(watch) {
    manager.set("watch", watch);
    return manager;
  };

  manager.setWatchAggregateTimeout = function(timeout) {
    manager.set("watchOptions.aggregateTimeout", timeout);
    return manager;
  };

  manager.setWatchPoll = function(poll) {
    manager.set("watchOptions.poll", poll);
    return manager;
  };

  manager.setDebug = function(debug) {
    manager.set("debug", debug);
    return manager;
  };

  manager.setDevtool = function(devtool) {
    manager.set("devtool", devtool);
    return manager;
  };

  manager.setDevServer = function(devServer) {
    manager.set("devServer", devServer);
    return manager;
  };

  manager.setNode = function(node) {
    manager.set("node", node);
    return manager;
  };

  manager.setAmd = function(amd) {
    manager.set("amd", amd);
    return manager;
  };

  manager.setLoader = function(loader) {
    manager.set("loader", loader);
    return manager;
  };

  /*
   * recordsPath
   * recordsInputPath
   * recordsOutputPath
   */

  manager.addPlugin = function(plugins) {
    if (!isArray(plugins)) { plugins = [plugins]; }
    manager.set("plugins", plugins);
    return manager;
  };

  return manager;
}

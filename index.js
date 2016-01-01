var setupManager = require("setup-manager");

module.exports = function(instance) {
  var manager = setupManager(instance);

  var addModules = manager.set("module");
  manager.addModules = function(module) {
    if (!module) { return addModules; }
    addModules(module);
    return manager;
  };

  var addLoaders = manager.set("module.loaders");
  manager.addLoaders = function(loader) {
    if (!loader) { return addLoaders; }
    addLoaders(loader);
    return manager;
  };

  var addPlugins = manager.set("plugins");
  manager.addPlugins = function(plugin) {
    if (!plugin) { return addPlugins; }
    addPlugins(plugin);
    return manager;
  };

  return manager;
}

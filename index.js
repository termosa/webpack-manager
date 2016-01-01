module.exports = function (instance) {
  var config = (typeof instance == "object" ? Object.create(instance) : {});

  var manager = {
    setup: function () {
      return config;
    },
    set: function (name, value) {
      config[name] = value;
      return manager;
    },
    get: function (name) {
      return config[name];
    }
  };

  return manager;
}

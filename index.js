var $ = require("./utils");

function parse(name) {
  return name.split(".");
}

function pick(obj, name) {
  var key, keys = parse(name);
  while(key = keys.shift()) {
    if (keys.length == 0) { return obj[key]; }
    if (!$.isObject(obj[key])) { return; }
    obj = obj[key];
  }
}

function put(obj, name, value) {
  var key, keys = parse(name);
  while(key = keys.shift()) {
    if (keys.length == 0) {
      if ($.isObject(obj[key])) {
        $.extend(obj[key], value);
      } else {
        if ($.isObject(value)) {
          obj[key] = $.clone(value);
        } else {
          obj[key] = value;
        }
      }
      return;
    }
    if (!$.isObject(obj[key])) {
      obj[key] = {};
    }
    obj = obj[key];
  }
}

module.exports = function(instance) {
  var config = ($.isObject(instance) ? $.clone(instance) : {});

  var manager = {
    setup: function() {
      return config;
    },
    get: function(name) {
      return pick(config, name);
    },
    set: function(name, value) {
      if (typeof value == "undefined") {
        return function builder(value) {
          put(config, name, value);
          return builder;
        };
      }

      put(config, name, value);
      return manager;
    }
  };

  return manager;
}

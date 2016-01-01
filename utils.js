function isObject(variable) {
  return typeof variable == "object";
}

function isArray(variable) {
  return variable instanceof Array;
}

function clone(object) {
  if (isArray(object)) {
    return object.slice();
  }
  return extend({}, object);
}

function extendArray(list, values) {
  if (isArray(values)) {
    values.forEach(function (value) {
      list.push(value);
    });
  } else {
    list.push(values);
  }
  return list;
}

function extend(object, values) {
  if (object instanceof Array) {
    return extendArray(object, values);
  }

  var keys = Object.keys(values);
  for (var i = keys.length; i--;) {
    object[keys[i]] = values[keys[i]];
  }
  return object;
}

module.exports = {
  extend: extend,
  clone: clone,
  isObject: isObject,
  isArray: isArray
};

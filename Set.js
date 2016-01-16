function Set() {
  var items = {};

  this.has = function(value) {
    // hasOwnProperty的问题在于
    // 它是一个方法，所以可能会被覆写
    return items.hasOwnProperty(value)
  };

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function() {
    this.items = {};
  };

  this.size = function() {
    // 只可用于IE9及以上，但很方便
    return Object.keys(items).length;
  }

  // 可用于所有浏览器
  this.sizeLegacy = function() {
    var count = 0;
    for (var prop in items) {
      if (items.hasOwnProperty(prop)) {
        ++count;
      }
    }
    return count;
  }

  this.values = function() {
    return Object.keys(items);
  };

  this.valuesLegacy = function() {
    var keys = [];
    for (var key in items) {
      keys.push(key)
    };
    return keys;
  };

  this.union = function(otherSet) {
    var unionSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  this.intersection = function(otherSet) {
    var interSectionSet = new Set();
    var values = this.values();

    for (var i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        interSectionSet.add(values[i])
      }
    }

    return interSectionSet;
  };

  this.difference = function(otherSet) {
    var differenceSet = new Set();
    var values = this.values();

    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }

    return differenceSet;
  };

  this.subset = function(otherSet) {
    // 第一个判定
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      var values = this.values();

      for (var i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          // 第二个判定。这种写法能早点跳出。
          return false;
        }
      }

      return true;
    }
  }
};

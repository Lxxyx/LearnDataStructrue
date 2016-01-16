function Dictionary() {
  var items = {};

  this.has = function(key) {
    return key in items;
  };

  this.set = function(key, value) {
    items[key] = value;
  };

  this.remove = function(key) {
    delete items[key];
  };

  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function() {
    var values = [];

    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
    }

    return values;
  };

  this.clear = function() {
    this.items = {};
  };

  this.size = function() {
    // 只可用于IE9及以上，但很方便
    return Object.keys(items).length;
  };

  this.getItems = function() {
    return items;
  }
}

var dictionary = new Dictionary();
dictionary.set('Lxxyx', '841380530@qq.com');
dictionary.set('Lxxyx2', '8413805302@qq.com');
dictionary.set('Lxxyx3', '8413805303@qq.com');

function HashTable() {
  var table = [];

  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function(key, value) {
    var position = loseloseHashCode(key);
    console.log(position + '-' + key);
    table[position] = value;
  };

  this.get = function(key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function(key) {
    table[loseloseHashCode(key)] = undefined;
  };
}

var hash = new HashTable();
hash.put('Lxxyx', '841380530@qq.com');
hash.put('Lxxyx2', '841380530@qq.com');
hash.put('Lxxyx3', '841380530@qq.com');
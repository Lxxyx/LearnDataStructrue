function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;

  this.append = function(element) {
    var node = new Node(element);
    var current;

    if (head == null) {
      head = node;
    } else {
      // 当前项等于链表头部元素.
      // while循环到最后一个，从而将该节点加入链表尾部。
      current = head;
      // 当next为null时，判定为false。退出循环。
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      var current = head;
      var previous;
      var index = 0;

      if (position == 0) {
        // 因为之前head指向第一个元素，现在把head修改为指向第二个元素。
        // 核心概念在于链表前后全靠指针链接，而非数组一般。
        // 所以只需要改变head的元素。
        head = current.next;
      } else {
        while (index++ < position) {
          // previous指要操作元素位置之前的那个元素，current表示之后的那个元素。
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element);
      var current = head;
      var previous;
      var index = 0;

      if (position == 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.next = current;
      }

      length++;
      return true;
    } else {
      return false;
    }
  };

  this.toString = function() {
    var current = head;
    var string = '';

    while (current) {
      string = current.element;
      current = current.next;
    }
    return string;
  };

  this.indexOf = function(element) {
    var current = head;
    var index = -1;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isAmpty = function() {
    return length === 0
  };

  this.size = function() {
    return length;
  };

  this.getHead = function() {
    return head;
  }
}

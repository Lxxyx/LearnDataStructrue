function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }

  var length = 0;
  var head = null;
  var tail = null;

  this.append = function(element) {
    var node = new Node(element);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      var previous;
      var current = head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      tail = node;
    }
    length++;
    return node;
  };

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {

      var node = new Node(element);
      var index = 0;
      var previous;
      var current = head;

      if (position === 0) {

        if (head === null) {
          head = node;
          tail = node;
        } else {
          current.prev = node;
          node.next = current;
          head = node;
        }
      } else if (position === length) {

        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {

        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.prev = previous;
        current.prev = node;
        node.next = current;
      }

      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      var current = head;
      var index = 0;
      var previous;

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current.prev;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;
      return current.element;
    } else {
      return false;
    }
  };

  this.showHead = function() {
    return head;
  };

  this.showLength = function() {
    return length;
  };

  this.showTail = function() {
    return tail;
  }
}



// Ë«ÏòÑ­»·Á´±í
function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }

  var length = 0;
  var head = null;
  var tail = null;

  this.append = function(element) {
    var node = new Node(element);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      var previous;
      var current = head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      tail = node;
    }
    length++;
    return node;
  };

  this.insert = function(position, element) {
    if (position >= 0 && position <= length) {

      var node = new Node(element);
      var index = 0;
      var previous;
      var current = head;

      if (position === 0) {

        if (head === null) {
          head = node;
          tail = node;
        } else {
          current.prev = node;
          node.next = current;
          head = node;
        }
      } else if (position === length) {

        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {

        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.prev = previous;
        current.prev = node;
        node.next = current;
      }

      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    if (position > -1 && position < length) {
      var current = head;
      var index = 0;
      var previous;

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current.prev;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }

      length--;
      return current.element;
    } else {
      return false;
    }
  };

  this.showHead = function() {
    return head;
  };

  this.showLength = function() {
    return length;
  };

  this.showTail = function() {
    return tail;
  }
}



var a = new DoublyLinkedList()

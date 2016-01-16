/**
 * 双向链表的构造函数
 */
function DoublyLinkedList() {

  /**
   * 双向链表中节点的构造函数
   * @param {Any} element 要传入链表的元素
   */
  var Node = function(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }

  //双向链表的长度
  var length = 0;
  //双向链表的头结点，初始化为NULL
  var head = null;
  //双向链表的尾结点，初始化为NULL
  var tail = null;

  /**
   * 向链表尾部添加元素
   * @param  {Any} element 要加入链表的节点
   * @return {Any}         加入链表的节点
   */
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

  /**
   * 向链表中插入某个元素
   * @param  {Number} position 要插入的位置
   * @return {Boolean}         插入成功返回true，失败返回false
   */
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

  /**
   * 移除链表中某一个元素
   * @param  {Number} position 要移除元素的位置
   * @return {Any}             移除成功返回被移除的元素，不成功则返回false
   */
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

  /**
   * 获取链表的头部
   * @return {Any} 链表的头部
   */
  this.showHead = function() {
    return head;
  };

  /**
   * 获取链表长度
   * @return {Number} 链表长度
   */
  this.showLength = function() {
    return length;
  };

  /**
   * 获取链表尾部
   * @return {Any} 链表尾部
   */
  this.showTail = function() {
    return tail;
  }
};
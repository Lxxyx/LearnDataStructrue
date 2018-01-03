/**
 * 单向链表构造函数
 */
function LinkedList() {

  /**
   * 单向链表中节点的构造函数
   * @param {Any} element 要传入链表的节点
   */
  var Node = function(element) {
    this.element = element;
    this.next = null;
  }

  //单向链表的长度
  var length = 0;
  //单向链表的头结点，初始化为NULL
  var head = null;


  /**
   * 向单向链表尾部添加元素
   * @param  {Any} element 要加入链表的节点
   */
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

  /**
   * 移除单向链表中某一个元素
   * @param  {Number} position 要移除元素的位置
   * @return {Any}          移除成功返回被移除的元素，不成功则返回NULL
   */
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

  /**
   * 向单向链表中插入某个元素
   * @param  {Number} position 要插入的位置
   * @param  {Any} element  要插入的元素
   * @return {Boolean}          插入成功返回true，失败返回false
   */
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

  /**
   * 将链表所有内容以字符串输出
   * @return {String} 要输出的字符串
   */
  this.toString = function() {
    var current = head;
    var string = '';

    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  };

  /**
   * 寻找某个元素在单向链表中的位置
   * @param  {Any} element 要寻找的元素
   * @return {Number}         返回值>=0则代表找到相应位置
   */
  this.indexOf = function(element) {
    var current = head;
    var index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  /**
   * 移除给定的元素
   * @param  {Any} element 要移除的元素
   * @return {Number}         返回值>=0表示移除成功
   */
  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  /**
   * 判断单向链表是否为空
   * @return {Boolean} 为空则返回true，不为空则返回false
   */
  this.isAmpty = function() {
    return length === 0
  };

  /**
   * 返回单向链表长度
   * @return {Number} 单向链表的长度
   */
  this.size = function() {
    return length;
  };

  /**
   * 获取单向链表的头部
   * @return {Any} 单向链表的头部
   */
  this.getHead = function() {
    return head;
  }
}

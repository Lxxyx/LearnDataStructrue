/**
 * 栈的构造函数
 */
function Stack() {

  /**
   * 用数组来模拟栈
   * @type {Array}
   */
  var items = [];

  /**
   * 将元素送入栈，放置于数组的最后一位
   * @param  {Any} element 接受的元素，不限制类型
   */
  this.push = function(element) {
    items.push(element);
  };

  /**
   * 弹出栈顶元素
   * @return {Any} 返回被弹出的值
   */
  this.pop = function() {
    return items.pop();
  };

  /**
   * 查看栈顶元素
   * @return {Any} 返回栈顶元素
   */
  this.peek = function() {
    return items[items.length - 1];
  }

  /**
   * 确定栈是否为空
   * @return {Boolean} 若栈为空则返回true,不为空则返回false
   */
  this.isAmpty = function() {
    return items.length === 0
  };

  /**
   * 清空栈中所有内容
   */
  this.clear = function() {
    items = [];
  };

  /**
   * 返回栈的长度
   * @return {Number} 栈的长度
   */
  this.size = function() {
    return items.length;
  };

  /**
   * 以字符串显示栈中所有内容
   */
  this.print = function() {
    console.log(items.toString());
  };
}

/**
 * 将10进制数字转为2进制数字
 * @param  {Number} decNumber 要转换的10进制数字
 * @return {Number}           转换后的2进制数字
 */
function divideBy2(decNumber) {

  var remStack = new Stack(),
    rem,
    binaryString = '';

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isAmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
};

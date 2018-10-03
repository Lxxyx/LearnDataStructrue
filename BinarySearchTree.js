/**
 * 二叉搜索树的构造函数
 */
function BinarySearchTree() {

  /**
   * 二叉搜索树键的构造函数
   * @param {Number} key 要生成的键值
   */
  var Node = function(key) {
    // 键值
    this.key = key;
    // 左子节点
    this.left = null;
    // 右子节点
    this.right = null;
  }

  /**
   * 二叉树的根节点，不存在时表示为Null
   * @type {Null or Number}
   */
  var root = null;

  /**
   * 插入某个键到二叉树中
   * @param  {Number} key 要插入的键值
   */
  this.insert = function(key) {
    // 用传入的值生成二叉树的键
    var newNode = new Node(key);

    // 根节点为Null时，传入的键则为根节点
    // 否则调用insertNode函数来插入子节点
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode)
    }
  };

  /**
   * 用于插入子节点。
   * @param  {Node} node    根节点
   * @param  {Node} newNode 要插入的节点
   */
  var insertNode = function(node, newNode) {
    //由于二叉搜索树的性质，所以当键值小于当前所在节点的键值
    //则使得左子结点成为新的要比较的节点，进行递归调用
    //如果左子结点为null，则将键值赋值给左子结点。
    //如果键值大于当前所在节点的键值，原理同上。
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  };

  var printNode = function(value) {
    console.log(value);
  }

  /**
   * 中序遍历操作，常用于排序。会把树中元素从小到大的打印出来。
   * 因为在javascript的递归中，遇到递归是，会优先调用递归的函数。直到递归不再进行。
   * 然后会在递归调用的最后一个函数中执行其它语句。再一层层的升上去。
   * 所以中序遍历会有从小到大的输出结果。
   * 后续的先序和后续遍历和这个原理差不多，取决于callback放在哪儿。
   * 
   * @param  {Function} callback 获取到节点后的回调函数
   */
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback);
  };


  /**
   * 中序遍历的辅助函数，用于遍历节点
   * @param  {Node}   node     遍历开始的节点，默认为root
   * @param  {Function} callback 获取到节点后的回调函数
   */
  var inOrderTraverseNode = function(node, callback) {
    // 当前节点不为NULL则继续递归调用
    if (node != null) {
      inOrderTraverseNode(node.left, callback);
      // 获取到节点后，调用的函数
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  /**
   * 前序遍历操作，常用于打印一个结构化的文档
   * @param  {Function} callback 获取到节点后的回调函数
   */
  this.preOrderTranverse = function(callback) {
    preOrderTranverseNode(root, callback);
  };

  /**
   * 前序遍历的辅助函数，用于遍历节点
   * @param  {Node}   node     遍历开始的节点，默认为root
   * @param  {Function} callback 获取到节点后的回调函数
   */
  var preOrderTranverseNode = function(node, callback) {
    if (node != null) {
      callback(node.key);
      preOrderTranverseNode(node.left, callback);
      preOrderTranverseNode(node.right, callback);
    }
  };

  /**
   * 后序遍历操作，常用于计算所占空间
   * @param  {Function} callback 获取到节点后的回调函数
   */
  this.postOrderTranverse = function(callback) {
    postOrderTranverseNode(root, callback);
  };

  /**
   * 后序遍历的辅助函数，用于遍历节点
   * @param  {Node}   node     遍历开始的节点，默认为root
   * @param  {Function} callback 获取到节点后的回调函数
   */
  var postOrderTranverseNode = function(node, callback) {
    postOrderTranverseNode(node.left, callback);
    postOrderTranverseNode(node.right, callback);
    callback(node.key);
  };

  /**
   * 返回树中最小的值
   * @return {Function} min函数的辅助函数
   */
  this.min = function() {
    return minNode(root);
  };

  /**
   * min函数的辅助函数
   * @param  {Node} node 查找开始的节点，默认为root
   * @return {key}      节点的值
   */
  var minNode = function(node) {
    // 如果node存在，则开始搜索。能避免树的根节点为Null的情况
    if (node) {
      // 只要树的左侧子节点不为null，则把左子节点赋值给当前节点。
      // 若左子节点为null，则该节点肯定为最小值。
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  /**
   * 返回树中最大的值
   * @return {Function} max函数的辅助函数
   */
  this.max = function() {
    return maxNode(root);
  };

  /**
   * max函数的辅助函数
   * @param  {Node} node 查找开始的节点，默认为root
   * @return {Key}      节点的值
   */
  var maxNode = function(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  /**
   * 搜索某个值是否存在于树中
   * @param  {Node} key 搜索开始的节点，默认为root
   * @return {Function}     search函数的辅助函数
   */
  this.search = function(key) {
    return searchNode(root, key);
  };

  /**
   * search函数的辅助函数
   * @param  {Node} node 搜索开始的节点，默认为root
   * @param  {Key} key  要搜索的键值
   * @return {Boolean}      找到节点则返回true，否则返回false
   */
  var searchNode = function(node, key) {
    // 如果根节点不存在，则直接返回null
    if (node === null) {
      return false;
    } else if (key < node.key) {
      searchNode(node.left, key)
    } else if (key > node.key) {
      searchNode(node.right, key)
    } else {
      // 如果该节点值等于传入的值，返回true
      return true;
    }
  };

  /**
   * 从树中移除某个键
   * @param  {Key} key 要移除的键值
   * @return {Function}     remove函数的辅助函数
   */
  this.remove = function(key) {
    root = removeNode(root, key);
  };

  /**
   * remove函数的辅助函数
   * @param  {Node} node 搜索开始的节点，默认为root
   * @param  {Key} key   要移除的键值
   * @return {Boolean}   移除成功则返回true，否则返回false
   */
  var removeNode = function(node, key) {
    // 如果根节点不存在，则直接返回null
    if (node === null) {
      return null;
    }
    // 未找到节点前，继续递归调用。
    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node;
    } else {
      // 第一种场景：只是一个叶节点
      // 这种情况只需要直接把节点赋值为null即可
      if (node.left === null && node.right === null) {
        node = null;
        // 处理完直接return节点
        return node;
      }
      // 第二种场景：有一个子节点
      // 如果左节点为null，则代表右节点存在。
      // 于是把当前节点赋值为存在的那个子节点
      if (node.left === null) {
        node = node.right;
        // 处理完直接return节点
        return node;
      } else if (node.right == null) {
        node = node.left;
        // 处理完直接return节点
        return node;
      }
      // 第三种场景：有两个子节点
      // 首先加入辅助节点，同时找寻右子节点中的最小节点
      // 并把当前节点替换为右子节点中的最小节点
      // 同时为了避免节点重复，移除右子节点中的最小节点
      var aux = findMinNode(node.right);
      node.key = aux.key;

      node.right = removeNode(node.right, aux.key);
      // 处理完直接return节点
      return node;
    }
  };

  /**
   * remove函数的辅助函数
   * @param  {Node} node 查找开始的节点，默认为root
   * @return {Node}      最小的节点
   */
  var findMinNode = function(node) {
    // 如果node存在，则开始搜索。能避免树的根节点为Null的情况
    if (node) {
      // 只要树的左侧子节点不为null，则把左子节点赋值给当前节点。
      // 若左子节点为null，则该节点肯定为最小值。
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  };

};
var tree = new BinarySearchTree();

tree.insert(1)
tree.insert(4)
tree.insert(7)
tree.insert(6)
tree.insert(8)
tree.insert(2)



console.log(tree.search(1) ? "key 1 find" : "key 1 not find");
console.log(tree.search(22) ? "key 22 find" : "key 22 not find");

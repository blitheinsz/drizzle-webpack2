exports.bindings = { // 绑定此视图用到的model
    getM: true, // 值为true表示数据改变后会刷新页面
    state: 'handleStateChange' // state model数据改变后会回调handleStateChange函数
};

// 绑定页面操作触发与index.js定义的回调函数的关联
exports.actions = {
    'click getID': 'doGet',
    'click postID': 'doPost', // 绑定页面ID=postID的元素,点击时触发index.js的this.store.callbacks.doPost方法
    'click deleteID': 'doDelete',
    'click putID*': 'doPut'
};
exports.actionCallbacks = { // 请求成功后会回调这里的方法，方法名和上面actions里定义的方法名要相同
    doGet: function() {
        alert('请求数据成功');
    }
};
exports.handleStateChange = function() {
    console.log('state model data changed');
};


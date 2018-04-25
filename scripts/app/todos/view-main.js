var _ = require('lodash/collection');// 加载用到的工具模块
exports.bindings = { // 绑定此视图用到的model,值为true表示数据改变后会刷新页面
    todos: true,
    filter: true
};
exports.events = { // 绑定视图内的dom事件，与exports.handlers配套使用
    'dblclick edit-*': 'showEdit', // 事件类型  dom元素：事件处理函数
    'blur input-*': 'cancelEdit'
};
exports.handlers = { // 与exports.events配套使用
    showEdit: function(id, e) { // 事件处理函数，对应events里的showEdit
        e.target.parentNode.parentNode.classList.add('editing');
        this.$('input-' + id).focus();
    },
    cancelEdit: function(id, e) {
        e.target.parentNode.parentNode.classList.remove('editing');
    }
};
exports.dataForTemplate = { // 模板载入之前处理一下需要传递给模板的数据
    todos: function(data) {
        var filter = data.filter;
        if (!filter || filter === 'all') {
            return data.todos;
        }
        return _.filter(data.todos, {completed: filter === 'completed'});
    },
    completed: function(data) {
        return _.every(data.todos, 'completed', true);
    },
    haveItem: function(data) {
        return data.todos.length > 0;
    }
};
// 绑定页面操作触发与index.js定义的回调函数的关联
exports.actions = {
    'change toggle-*': 'completeTodo',
    'click destroy-*': 'removeTodo', // 绑定页面ID=destroy-*的元素,点击时触发index.js的this.store.callbacks.removeTodo方法
    'change toggleAll': 'toggleAllTodos',
    'keypress input-*': 'updateTodo'
};
// 页面触发表单提交时，会将表单的数据放入到payload对象中，dataForAction可以在回调函数之前
// 先处理一下需要传递的数据，或者做一些数据校验
exports.dataForActions = {
    completeTodo: function(data, e) {
        data.completed = e.target.checked; //eslint-disable-line
        return data;
    },
    toggleAllTodos: function(data, e) {
        this.allCompleted = data.completed = e.target.checked; //eslint-disable-line
        return data;
    },
    updateTodo: function(data, e) {
        if (e.keyCode !== 13) {
            return false;
        }
        e.preventDefault();
        if (!data.text) {
            return false;
        }
        return data;
    }
};

var D = require('drizzle-zxy'),
    _ = require('lodash/collection');

exports.store = {
    callbacks: {
        updateTodo: function(payload) {
            var todos = this.models.todos;
            _.find(todos.data, 'id', payload.id).text = payload.text;
            todos.changed();
        },
        removeTodo: function(payload) {
            var todos = this.models.todos;
            todos.set(_.reject(todos.data, { id: payload.id }), true);
        },
        completeTodo: function(payload) {
            var todos = this.models.todos;
            _.find(todos.data, { id: payload.id }).completed = payload.completed;
            todos.changed();
        },
        toggleAllTodos: function(payload) {
            var todos = this.models.todos;
            _.map(todos.data, function(item) {
                item.completed = payload.completed;//eslint-disable-line
            });
            todos.changed();
        },
        createTodo: function(payload) {
            var todos = this.models.todos;
            todos.data.unshift({ id: D.uniqueId('todo'), text: payload.text, completed: false });
            todos.changed();
        },
        clearCompleted: function() {
            var todos = this.models.todos;
            todos.set(_.reject(todos.data, { completed: true }), true);
        }
    },

    models: {// 这里定义了两个model
        todos: { autoLoad: 'after' },
        filter: { data: 'all' }
    }
};

exports.items = {// 定义了视图view与模板region的绑定关系
    header: 'header', // 视图header与.hbs模板中名为header的region绑定
    main: 'main',   // 视图main与.hbs模板中名为main的region绑定
    footer: 'footer'
};

exports.mixin = {
    filter: function(id) {
        this.store.models.filter.set(id, true);
    }
};

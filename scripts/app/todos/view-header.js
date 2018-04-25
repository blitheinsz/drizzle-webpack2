exports.bindings = {
    todos: false
};

exports.actions = {
    'keypress new-todo': 'createTodo'
};

exports.dataForActions = {
    createTodo: function(data, e) {
        if (e.keyCode !== 13) {
            return false;
        }
        e.preventDefault();

        if (!data.text) {
            return false;
        }
        data.text = data.text + '哈哈'; // eslint-disable-line
        this.$('new-todo').value = '';
        return data;
    }
};

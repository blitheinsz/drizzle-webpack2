module.exports = { // 定义属于todos模块的子路由
    routes: {
        'fit/:id': 'filterTodos', //filterTodos对应下面定义的filterTodos函数
    },

    filterTodos: function(fitid) {
        alert('子路由:' + fitid);
        // 这里用来切换到新的模块
        // return this.app.show('content', 'knowledge/details', { id: id });
    }
};

exports.items = {
    main: 'main-rg'
};
exports.store = {
    models: {
        // 定义listbox Model, autoLoad值为after表示模块渲染完成再去后台请求model数据,
        // url设置请求的接口路径,详情看ppt文档Model-Url部分
        // 最终接口路径(http://localhost:8000/api/courselist)
        listbox: { autoLoad: 'after', url: '../courselist' },
        filter: { data: 'all' } // 用来过滤显示的课程数据,默认全部显示
    },
    callbacks: {
        filterCourse: function() {
            if (this.models.filter.data === 1) {
                this.models.filter.set('all', true);// 显示全部课程
            } else {
                this.models.filter.set(1, true);// 只显示男老师的课程
            }
        }
    }
};
exports.mixin = {// 可以通过mixin扩展module模块的功能
    fn1: function() { // 扩展1
    },
    fn2: function() { // 扩展2

    }
};


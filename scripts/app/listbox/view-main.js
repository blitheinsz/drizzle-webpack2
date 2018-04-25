var _ = require('lodash/collection');// 加载用到的工具模块
exports.bindings = { // 绑定此视图用到的model,值为true表示数据改变后会刷新页面
    listbox: true,   // 绑定index.js定义的listbox model
    filter: true
};
exports.dataForTemplate = { //模板载入之前处理一下需要传递给模板的数据
    listData: function(data) {
        // data包含我们绑定的model: listbox和filter
       // data.listbox就是model请求后台接口获取的json数据，我们这里返回课程列表的数据，
       // 然后在模板中渲染
        var filterTxt = data.filter;
        if (!filterTxt || filterTxt === 'all') {
            return data.listbox;
        }
        return _.filter(data.listbox, { sex: filterTxt });
    },
    showMan: function(data) {
        return data.filter === 1;
    }
};
exports.actions = {
    'change sexcheck': 'filterCourse'
};
exports.components = [
    {
        id: 'qr-box', // templates.hbs里定义的元素
        name: 'qrcode', // 在qr-code.js里注册的组件名
        options: { width: 200, height: 200 }   // 此组件配置属性
    }
];


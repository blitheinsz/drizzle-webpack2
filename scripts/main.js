
// 加载其他要使用的模块
var D = require('drizzle-zxy'),
    H = require('handlebars/runtime'),
    jQuery,
    app;
window.$ = window.jQuery = jQuery = require('jquery');
H.registerHelper('module', function(options) { // 注册handlebars的helper
    return (this.Self instanceof D.Module) ? options.fn(this) : '';
});

H.registerHelper('view', function(name, options) { // 注册handlebars的helper
    return (this.Self instanceof D.View) && this.Self.name === name ? options.fn(this) : '';
});

require('./app/ext/core/drizzle-core');
// 扩展drizzlejs框架Adapter对象的功能
D.adapt({
    getFormData: function(form) {
        var result = {};
        jQuery.each(jQuery(form).serializeArray(), function(i, item) {
            result[item.name] = item.value;
        });
        return result;
    }
});
// 创建应用程序实例，因为是单页面应用，所以只需要创建一个
window.app = app = new D.Application({
    container: document.getElementById('content'), // 应用的根容器
    urlRoot: 'api', // 详情见model url的说明
    routerPrefix: '#/',
    scriptRoot: 'scripts/app',
    routers: ['', 'todos'] // 其它模块定义的router.js文件，['todos']表示会加载todos模块目录下的router.js文件
});

app.start('todos');// 通过路由todos默认加载显示todos模块

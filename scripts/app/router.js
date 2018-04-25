module.exports = {
    routes: {
        todos: 'showTodos', // showTodos对应下面定义的showTodos函数
        listbox: 'showListBox',
        dynamic: 'showDynamic',
        request: 'showRequest'
    },

    showTodos: function() {
        // 在名为content的Region中展示todos模块
        return this.app.show('content', 'todos', { forceRender: false });
    },
    showListBox: function() {
         // 在名为content的Region中展示listbox模块
        var me = this;
        require.ensure([], function() {
            require('../app/ext/qr-code');
            require.context('../app/listbox', true, /\.js$|\.hbs$/);
            return me.app.show('content', 'listbox', { forceRender: true });
        }, 'listbox');
    },
    showDynamic: function() {
        // 在名为content的Region中展示dynamic模块
        var me = this;
        require.ensure([], function() {
            require('../app/ext/videojs');
            require('../../node_modules/video.js/dist/video-js.css');
            require.context('../app/video', true, /\.js$|\.hbs$/);
            require.context('../app/dynamic', true, /\.js$|\.hbs$/);
            return me.app.show('content', 'dynamic', { forceRender: true });
        }, 'dynamic');
    },
    showRequest: function() {
        // 在名为content的Region中展示request模块
        var me = this;
        require.ensure([], function() {
            require.context('../app/request', true, /\.js$|\.hbs$/);
            require('../../styles/postcss/page.css');
            return me.app.show('content', 'request', { forceRender: true });
        }, 'request');
    }
};

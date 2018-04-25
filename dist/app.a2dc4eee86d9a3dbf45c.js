webpackJsonp([3],{

/***/ "./scripts/app/ext/core/drizzle-core":
/***/ (function(module, exports, __webpack_require__) {

var D = __webpack_require__("./node_modules/drizzle-zxy/drizzle");
D.Loader.prototype.loadResource = function (path) {
    var this33 = this;

    var app$options = this.app.options,
        scriptRoot = app$options.scriptRoot,
        getResource = app$options.getResource,
        amd = app$options.amd,
        fullPath = scriptRoot + '/' + path;

    return this.Promise.create(function (resolve) {
        if (amd) {
            // require([fullPath], resolve, reject);
        } else if (getResource) {
            resolve(getResource.call(this33.app, fullPath));
        } else {
            // resolve(require('./' + fullPath));
            // console.log(fullPath);
            resolve(__webpack_require__('./' + fullPath)); //eslint-disable-line
        }
    });
};

/***/ }),

/***/ "./scripts/app/ext/view/dynamic-view":
/***/ (function(module, exports, __webpack_require__) {

var D = __webpack_require__("./node_modules/drizzle-zxy/drizzle"),
    _ = __webpack_require__("./node_modules/_lodash@4.17.4@lodash/collection"),
    _DynamicView;

/* eslint-disable no-underscore-dangle */
_DynamicView = function DynamicView() {
    _DynamicView.__super__.constructor.apply(this, arguments);
};

D.extend(_DynamicView, D.View, {
    _afterRender: function _afterRender() {
        var su = _DynamicView.__super__._afterRender.call(this),
            me = this;

        me.regions = [];
        return me.chain(_.map(this.$$('[data-dynamic-key]'), function (item) {
            var key = item.getAttribute('data-dynamic-key'),
                moduleName,
                entity,
                region;

            entity = me._option('getEntity', key);
            moduleName = me._option('getEntityModuleName', key, entity);
            entity = me._option('dataForEntityModule', entity);

            region = new D.Region(me.app, me.module, item, key);
            me.regions.push(region);
            return region.show(moduleName, entity);
        }), function (items) {
            this._entities = items;
        }, su);
    },

    _beforeRender: function _beforeRender() {
        var su = _DynamicView.__super__._beforeRender.call(this);
        return this.chain(this._closeRegions, su);
    },

    _beforeClose: function _beforeClose() {
        var su = _DynamicView.__super__._beforeClose.call(this);
        return this.chain(this._closeRegions, su);
    },

    _closeRegions: function _closeRegions() {
        var result = this.chain(this.regions && this.regions.map(function (region) {
            return region.close();
        }));

        delete this.regions;
        return result;
    },

    getEntities: function getEntities() {
        return this._entities;
    }
});
/* eslint-enable no-underscore-dangle */

D.registerView('dynamic', _DynamicView);

/***/ }),

/***/ "./scripts/app/menu recursive \\.js$|\\":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./scripts/app/menu/index",
	"./templates.hbs": "./scripts/app/menu/templates",
	"./view-main.js": "./scripts/app/menu/view-main"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./scripts/app/menu recursive \\.js$|\\";

/***/ }),

/***/ "./scripts/app/menu/index":
/***/ (function(module, exports) {

exports.items = {
    main: 'main'
};

/***/ }),

/***/ "./scripts/app/menu/templates":
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__("./node_modules/_handlebars@4.0.11@handlebars/runtime");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "   <div class=\"header\" data-region=\"main\">\r\n    \r\n   </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <h1 class=\"brand-title\">Drizzle Demos</h1>\r\n    <h2 class=\"brand-tagline\">一个基于DrizzleJs框架的示例</h2>\r\n    <nav class=\"nav\">\r\n        <ul class=\"nav-list\">\r\n             <!--导航到todos模块 -->\r\n            <li class=\"nav-item\"><a class=\"pure-button\" id=\"aid2\" href=\"#/todos\">todos模块</a></li>\r\n            <!--导航到listbox模块 -->\r\n            <li class=\"nav-item\"><a class=\"pure-button\" href=\"#/listbox\">课程列表模块</a></li>\r\n            <!--声明式加载模块示例 -->\r\n            <li class=\"nav-item\"><a class=\"pure-button\" href=\"#/dynamic\">声明式加载模块</a></li>\r\n            <!--数据请求示例 -->\r\n            <li class=\"nav-item\"><a class=\"pure-button\" href=\"#/request\">数据请求模块</a></li>\r\n        </ul>\r\n    </nav>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.module || (depth0 != null ? depth0.module : depth0)) != null ? helper : alias2),(options={"name":"module","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.module) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = (helpers.view || (depth0 && depth0.view) || alias2).call(alias1,"main",{"name":"view","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./scripts/app/menu/view-main":
/***/ (function(module, exports) {



/***/ }),

/***/ "./scripts/app/router":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    routes: {
        todos: 'showTodos', // showTodos对应下面定义的showTodos函数
        listbox: 'showListBox',
        dynamic: 'showDynamic',
        request: 'showRequest'
    },

    showTodos: function showTodos() {
        // 在名为content的Region中展示todos模块
        return this.app.show('content', 'todos', { forceRender: false });
    },
    showListBox: function showListBox() {
        // 在名为content的Region中展示listbox模块
        var me = this;
        __webpack_require__.e/* require.ensure */(2).then((function () {
            __webpack_require__("./scripts/app/ext/qr-code");
            __webpack_require__("./scripts/app/listbox recursive \\.js$|\\");
            return me.app.show('content', 'listbox', { forceRender: true });
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    },
    showDynamic: function showDynamic() {
        // 在名为content的Region中展示dynamic模块
        var me = this;
        __webpack_require__.e/* require.ensure */(0).then((function () {
            __webpack_require__("./scripts/app/ext/videojs");
            __webpack_require__("./node_modules/_video.js@5.20.4@video.js/dist/video-js.css");
            __webpack_require__("./scripts/app/video recursive \\.js$|\\");
            __webpack_require__("./scripts/app/dynamic recursive \\.js$|\\");
            return me.app.show('content', 'dynamic', { forceRender: true });
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    },
    showRequest: function showRequest() {
        // 在名为content的Region中展示request模块
        var me = this;
        __webpack_require__.e/* require.ensure */(1).then((function () {
            __webpack_require__("./scripts/app/request recursive \\.js$|\\");
            __webpack_require__("./styles/postcss/page.css");
            return me.app.show('content', 'request', { forceRender: true });
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
};

/***/ }),

/***/ "./scripts/app/todos recursive \\.js$|\\":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./scripts/app/todos/index",
	"./router.js": "./scripts/app/todos/router",
	"./templates.hbs": "./scripts/app/todos/templates",
	"./view-footer.js": "./scripts/app/todos/view-footer",
	"./view-header.js": "./scripts/app/todos/view-header",
	"./view-main.js": "./scripts/app/todos/view-main"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./scripts/app/todos recursive \\.js$|\\";

/***/ }),

/***/ "./scripts/app/todos/index":
/***/ (function(module, exports, __webpack_require__) {

var D = __webpack_require__("./node_modules/drizzle-zxy/drizzle"),
    _ = __webpack_require__("./node_modules/_lodash@4.17.4@lodash/collection");

exports.store = {
    callbacks: {
        updateTodo: function updateTodo(payload) {
            var todos = this.models.todos;
            _.find(todos.data, 'id', payload.id).text = payload.text;
            todos.changed();
        },
        removeTodo: function removeTodo(payload) {
            var todos = this.models.todos;
            todos.set(_.reject(todos.data, { id: payload.id }), true);
        },
        completeTodo: function completeTodo(payload) {
            var todos = this.models.todos;
            _.find(todos.data, { id: payload.id }).completed = payload.completed;
            todos.changed();
        },
        toggleAllTodos: function toggleAllTodos(payload) {
            var todos = this.models.todos;
            _.map(todos.data, function (item) {
                item.completed = payload.completed; //eslint-disable-line
            });
            todos.changed();
        },
        createTodo: function createTodo(payload) {
            var todos = this.models.todos;
            todos.data.unshift({ id: D.uniqueId('todo'), text: payload.text, completed: false });
            todos.changed();
        },
        clearCompleted: function clearCompleted() {
            var todos = this.models.todos;
            todos.set(_.reject(todos.data, { completed: true }), true);
        }
    },

    models: { // 这里定义了两个model
        todos: { autoLoad: 'after' },
        filter: { data: 'all' }
    }
};

exports.items = { // 定义了视图view与模板region的绑定关系
    header: 'header', // 视图header与.hbs模板中名为header的region绑定
    main: 'main', // 视图main与.hbs模板中名为main的region绑定
    footer: 'footer'
};

exports.mixin = {
    filter: function filter(id) {
        this.store.models.filter.set(id, true);
    }
};

/***/ }),

/***/ "./scripts/app/todos/router":
/***/ (function(module, exports) {

module.exports = { // 定义属于todos模块的子路由
    routes: {
        'fit/:id': 'filterTodos' //filterTodos对应下面定义的filterTodos函数
    },

    filterTodos: function filterTodos(fitid) {
        alert('子路由:' + fitid);
        // 这里用来切换到新的模块
        // return this.app.show('content', 'knowledge/details', { id: id });
    }
};

/***/ }),

/***/ "./scripts/app/todos/templates":
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__("./node_modules/_handlebars@4.0.11@handlebars/runtime");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"todoapp\">\n        <div data-region=\"header\"></div>\n        <div data-region=\"main\"></div>\n        <div data-region=\"footer\"></div>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <h1>todos</h1>\n    <form>\n        <input id=\"new-todo\" class=\"new-todo\" placeholder=\"What needs to be done?\" name=\"text\" autocomplete=\"off\"/>\n    </form>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"main\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.haveItem : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <input id=\"toggleAll\" class=\"toggle-all\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " type=\"checkbox\"/>\n        <ul class=\"todo-list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.todos : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " class=\"hidden\"";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.checked || (depth0 != null ? depth0.checked : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"checked","hash":{},"data":data}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n            <li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n                <div class=\"view\">\n                    <input class=\"toggle\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " type=\"checkbox\" id=\"toggle-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-name=\"id\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>\n                    <label id=\"edit-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</label>\n                    <button class=\"destroy\" id=\"destroy-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-name=\"id\" data-value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"></button>\n                </div>\n                <form>\n                    <input class=\"edit\" value=\""
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\" id=\"input-"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\"text\"/>\n                    <input type=\"hidden\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"/>\n                </form>\n            </li>\n        ";
},"11":function(container,depth0,helpers,partials,data) {
    return " class=\"completed\"";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"footer\" "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.haveItem : stack1),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n        <span class=\"todo-count\">\n            <strong>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.left : stack1), depth0))
    + "</strong>\n            items left\n        </span>\n        <ul class=\"filters\">\n            <li class=\"all\"><a "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.all : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " href=\"\">All</a></li>\n            <li class=\"active\"><a "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.active : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " href=\"#/todos/fit/active\">Active</a></li>\n            <li class=\"completed\"><a "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.completed : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " href=\"#/todos/fit/complete\">Completed</a></li>\n        </ul>\n        <button id=\"remove\" class=\"clear-completed\" "
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.info : depth0)) != null ? stack1.haveCompleted : stack1),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Clear completed</button>\n    </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return " class=\"selected\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.module || (depth0 != null ? depth0.module : depth0)) != null ? helper : alias2),(options={"name":"module","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.module) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = (helpers.view || (depth0 && depth0.view) || alias2).call(alias1,"header",{"name":"view","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.view || (depth0 && depth0.view) || alias2).call(alias1,"main",{"name":"view","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.view || (depth0 && depth0.view) || alias2).call(alias1,"footer",{"name":"view","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./scripts/app/todos/view-footer":
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__("./node_modules/_lodash@4.17.4@lodash/collection");

exports.bindings = {
    todos: true,
    filter: true
};

exports.dataForTemplate = {
    info: function info(data) {
        var info = {
            left: _.filter(data.todos, 'completed', false).length,
            haveCompleted: _.some(data.todos, 'completed', true),
            haveItem: data.todos.length > 0
        };

        info[data.filter] = true;
        return info;
    }
};

exports.actions = {
    'click remove': 'clearCompleted'
};

/***/ }),

/***/ "./scripts/app/todos/view-header":
/***/ (function(module, exports) {

exports.bindings = {
    todos: false
};

exports.actions = {
    'keypress new-todo': 'createTodo'
};

exports.dataForActions = {
    createTodo: function createTodo(data, e) {
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

/***/ }),

/***/ "./scripts/app/todos/view-main":
/***/ (function(module, exports, __webpack_require__) {

var _ = __webpack_require__("./node_modules/_lodash@4.17.4@lodash/collection"); // 加载用到的工具模块
exports.bindings = { // 绑定此视图用到的model,值为true表示数据改变后会刷新页面
    todos: true,
    filter: true
};
exports.events = { // 绑定视图内的dom事件，与exports.handlers配套使用
    'dblclick edit-*': 'showEdit', // 事件类型  dom元素：事件处理函数
    'blur input-*': 'cancelEdit'
};
exports.handlers = { // 与exports.events配套使用
    showEdit: function showEdit(id, e) {
        // 事件处理函数，对应events里的showEdit
        e.target.parentNode.parentNode.classList.add('editing');
        this.$('input-' + id).focus();
    },
    cancelEdit: function cancelEdit(id, e) {
        e.target.parentNode.parentNode.classList.remove('editing');
    }
};
exports.dataForTemplate = { // 模板载入之前处理一下需要传递给模板的数据
    todos: function todos(data) {
        var filter = data.filter;
        if (!filter || filter === 'all') {
            return data.todos;
        }
        return _.filter(data.todos, { completed: filter === 'completed' });
    },
    completed: function completed(data) {
        return _.every(data.todos, 'completed', true);
    },
    haveItem: function haveItem(data) {
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
    completeTodo: function completeTodo(data, e) {
        data.completed = e.target.checked; //eslint-disable-line
        return data;
    },
    toggleAllTodos: function toggleAllTodos(data, e) {
        this.allCompleted = data.completed = e.target.checked; //eslint-disable-line
        return data;
    },
    updateTodo: function updateTodo(data, e) {
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

/***/ }),

/***/ "./scripts/app/viewport recursive \\.js$|\\":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./scripts/app/viewport/index",
	"./templates.hbs": "./scripts/app/viewport/templates"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./scripts/app/viewport recursive \\.js$|\\";

/***/ }),

/***/ "./scripts/app/viewport/index":
/***/ (function(module, exports) {

exports.items = {
    menu: { isModule: true, region: 'menu' }
};

/***/ }),

/***/ "./scripts/app/viewport/templates":
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__("./node_modules/_handlebars@4.0.11@handlebars/runtime");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"pure-g\">\n        <div class=\"sidebar pure-u-1 pure-u-md-1-4\" data-region=\"menu\"></div>\n        <div class=\"content pure-u-1 pure-u-md-3-4\" data-region=\"content\"></div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.module || (depth0 != null ? depth0.module : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"module","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.module) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});

/***/ }),

/***/ "./scripts/entry":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./styles/blog.css");
__webpack_require__("./styles/todos.css");
__webpack_require__("./scripts/app/ext/view/dynamic-view");
__webpack_require__("./scripts/app/router");
__webpack_require__("./scripts/app/menu recursive \\.js$|\\");
__webpack_require__("./scripts/app/todos recursive \\.js$|\\");
__webpack_require__("./scripts/app/viewport recursive \\.js$|\\");
__webpack_require__("./scripts/main");

/***/ }),

/***/ "./scripts/main":
/***/ (function(module, exports, __webpack_require__) {


// 加载其他要使用的模块
var D = __webpack_require__("./node_modules/drizzle-zxy/drizzle"),
    H = __webpack_require__("./node_modules/_handlebars@4.0.11@handlebars/runtime"),
    jQuery,
    app;
window.$ = window.jQuery = jQuery = __webpack_require__("./node_modules/_jquery@1.12.4@jquery/dist/jquery");
H.registerHelper('module', function (options) {
    // 注册handlebars的helper
    return this.Self instanceof D.Module ? options.fn(this) : '';
});

H.registerHelper('view', function (name, options) {
    // 注册handlebars的helper
    return this.Self instanceof D.View && this.Self.name === name ? options.fn(this) : '';
});

__webpack_require__("./scripts/app/ext/core/drizzle-core");
// 扩展drizzlejs框架Adapter对象的功能
D.adapt({
    getFormData: function getFormData(form) {
        var result = {};
        jQuery.each(jQuery(form).serializeArray(), function (i, item) {
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

app.start('todos'); // 通过路由todos默认加载显示todos模块

/***/ }),

/***/ "./styles/blog.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./styles/todos.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["./scripts/entry"]);
//# sourceMappingURL=app.a2dc4eee86d9a3dbf45c.js.map
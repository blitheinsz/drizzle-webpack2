webpackJsonp([1],{

/***/ "./node_modules/_css-loader@0.28.7@css-loader/index.js!./node_modules/_postcss-loader@2.0.9@postcss-loader/lib/index.js!./styles/postcss/page.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/_css-loader@0.28.7@css-loader/lib/css-base")(undefined);
// imports


// module
exports.push([module.i, ".mlist{\r\n\twidth: 15em;\r\n    text-align: center\r\n}\r\n.mlist li {\r\n\ttext-align: left;\r\n\tpadding-top: 0.5em;\r\n}\r\n.flx {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.r-person {\r\n    position: absolute;\r\n    left: 24em;\r\n    top: 9em;\r\n    width: 10em;\r\n    height: 13em\r\n}\r\n.r-person img {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}", ""]);

// exports


/***/ }),

/***/ "./scripts/app/request recursive \\.js$|\\":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.js": "./scripts/app/request/index",
	"./templates.hbs": "./scripts/app/request/templates",
	"./view-main.js": "./scripts/app/request/view-main"
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
webpackContext.id = "./scripts/app/request recursive \\.js$|\\";

/***/ }),

/***/ "./scripts/app/request/index":
/***/ (function(module, exports) {

exports.items = {
    main: 'main-r'
};
exports.store = {
    models: {
        getM: { url: '../getPlayList' }, // url表示服务端提供的api接口
        postM: { url: '../ask/post' },
        deleteM: { url: '../ask/delete' },
        putM: { url: '../ask/put' },
        state: { data: [] }
    },
    callbacks: {
        doGet: function doGet() {
            var model = this.models.getM;
            var stateModel = this.models.state;
            // var params = {id:'aeax'};
            // model.set(params);
            return this.get(model).then(function (data) {
                console.log(data);
                model.changed();
                stateModel.data.push('数据');
                stateModel.changed();
            });
        },
        doPost: function doPost() {
            var model = this.models.postM;
            var params = { objectID: '123456' };
            model.set(params);
            return this.post(model).then(function () {
                alert('操作成功');
            });
        },
        doDelete: function doDelete() {
            var model = this.models.deleteM;
            var params = { id: '123456' };
            model.set(params);
            return this.del(model).then(function () {
                // alert('操作成功');
            });
        },
        doPut: function doPut() {
            var model = this.models.putM;
            var params = { objectID: '123456' };
            model.set(params);
            return this.put(model).then(function () {
                alert('操作成功');
            });
        }
    }
};

exports.beforeRender = function () {};

/***/ }),

/***/ "./scripts/app/request/templates":
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__("./node_modules/_handlebars@4.0.11@handlebars/runtime");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "   <div class=\"header relative\" data-region=\"main-r\">\r\n    \r\n   </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <h1 class=\"brand-title\" style=\"text-align:center\">与后台数据交互示例</h1>\r\n    <div class=\"talign ttop\">\r\n        <button id=\"getID\">Get请求</button>\r\n        <button id=\"postID\">Post请求</button>\r\n        <button id=\"deleteID\">Delete请求</button>\r\n        <button id=\"putID\">Put请求</button>\r\n    </div>\r\n    <div class=\"ttop mlist\">\r\n        <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.getM : depth0)) != null ? stack1.aeax : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n    </div>\r\n    <div class=\"r-person\">\r\n        <img src=\"./images/person.jpg\"/>\r\n    </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <li><a title=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.videoName || (depth0 != null ? depth0.videoName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoName","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.module || (depth0 != null ? depth0.module : depth0)) != null ? helper : alias2),(options={"name":"module","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.module) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = (helpers.view || (depth0 && depth0.view) || alias2).call(alias1,"main",{"name":"view","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./scripts/app/request/view-main":
/***/ (function(module, exports) {

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
    doGet: function doGet() {
        alert('请求数据成功');
    }
};
exports.handleStateChange = function () {
    console.log('state model data changed');
};

/***/ }),

/***/ "./styles/postcss/page.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/_css-loader@0.28.7@css-loader/index.js!./node_modules/_postcss-loader@2.0.9@postcss-loader/lib/index.js!./styles/postcss/page.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/_style-loader@0.19.0@style-loader/lib/addStyles")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_postcss-loader@2.0.9@postcss-loader/lib/index.js!./page.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_postcss-loader@2.0.9@postcss-loader/lib/index.js!./page.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=request.chunk.54b01199c7e67bcca3c7.js.map
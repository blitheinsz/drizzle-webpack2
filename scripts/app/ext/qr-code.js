var D = require('drizzle-zxy'); // 引入框架
var QRCode = require('qrcodejs2');// 引入二维码库
// 注册名字为qrcode的组件
D.ComponentManager.register('qrcode', function(view, el, options) {
    // 根据view-main.js文件exports.components属性配置的参数实例化二维码组件
    // view: 视图View实例对象
    // el: QRCode组件作用的dom元素,对应exports.components的id属性
    // options: 对应exports.components里配置的参数options
    var opt = {
        text: 'none',
        width: 228,
        height: 228,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    };
    D.assign(opt, options);
    return new QRCode(el, opt);
}, function(view, comp) {
    comp.clear(); // 清理组件
});
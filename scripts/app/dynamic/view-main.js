exports.type = 'dynamic';
// 这个data获取的是getEntity返回的值，会作为renderOptions传入给要渲染的Module
exports.dataForEntityModule = function(data) {
    return data;
};

exports.getEntity = function() {
    return {
        type: 'video',
        url: 'xx.mp4'
    };
};

exports.getEntityModuleName = function() {
    return 'video';
};


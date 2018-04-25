// http://docs.videojs.com/docs/guides/setup.html
var D = require('drizzle-zxy'),
    videojs = require('video.js');
    // handlerView = function(view) {
    //     return function(method) {
    //         return function() {
    //             if (method) {
    //                 Array.prototype.unshift.call(arguments, this);
    //                 method.apply(view, arguments);
    //             }
    //         };
    //     };
    // };

videojs.options.flash.swf = '../build/video-js.swf';
// require('videojs-contrib-hls');
D.ComponentManager.register('videojs', function(view, el, options) {
    // var handle = handlerView(view);
    var opt = {
        controlBar: {
            currentTimeDisplay: true,
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false
        },
        language: 'zh-CN',
        controls: true,
        loop: false,
        width: 700,
        techOrder: ['html5', 'flash']
    };
    if (options.video.type !== 'audio') {
        opt.techOrder = ['html5', 'flash'];
    }

    return videojs(el, D.assign(opt, options.video), function() {
        this.on('error', function(e) { alert(e); });

        if (view.options.video) {
            this.on('loadeddata', function() {
                // console.log('loadeddata');
            });
            this.on('loadstart', function() {
                // console.log('loadstart');
            });
            this.on('loadedmetadata', function() {
                // console.log('loadedmetadata');
            });
            this.on('durationchange', function() {
                // console.log('durationchange');
            });
        }
        if (options.callbacks) options.callbacks.call(view, this);
    });
}, function(view, comp) {
    comp.tech_.buffered = function() { return {}; };//eslint-disable-line
    clearInterval(comp.tech_.currentTimeInterval);//eslint-disable-line
    comp.currentTime = function() {};//eslint-disable-line
    comp.dispose();
});

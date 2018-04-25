var D = require('drizzle-zxy');
D.Loader.prototype.loadResource = function(path) {
    var this33 = this;

    var app$options = this.app.options,
        scriptRoot = app$options.scriptRoot,
        getResource = app$options.getResource,
        amd = app$options.amd,
        fullPath = scriptRoot + '/' + path;


    return this.Promise.create(function(resolve) {
        if (amd) {
            // require([fullPath], resolve, reject);
        } else if (getResource) {
            resolve(getResource.call(this33.app, fullPath));
        } else {
            // resolve(require('./' + fullPath));
            // console.log(fullPath);
            resolve(__webpack_require__('./' + fullPath));//eslint-disable-line
        }
    });
};
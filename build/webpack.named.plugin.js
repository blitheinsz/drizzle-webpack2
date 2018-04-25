'use strict';
class NamedModulesPlugin {
    constructor (options) {
        this.options = options || {};
    }

    apply (compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('before-module-ids', (modules) => {
                modules.forEach((module) => {
                    if (module.id === null && module.libIdent) {
                        let newid = module.libIdent({
                            context: this.options.context || compiler.options.context
                        });
                        if (newid.slice(-3) === '.js') {
                            newid = newid.substring(0, newid.length - 3);
                            // console.log(newid);
                        } else if (newid.indexOf('.hbs') > -1) {
                            newid = newid.substring(0, newid.indexOf('.hbs'));
                        }
						module.id = newid; //eslint-disable-line
                    }
                });
            });
        });
    }
}

module.exports = NamedModulesPlugin;
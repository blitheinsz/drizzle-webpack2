var D = require('drizzle-zxy'),
    _ = require('lodash/collection'),
    DynamicView;

/* eslint-disable no-underscore-dangle */
DynamicView = function() {
    DynamicView.__super__.constructor.apply(this, arguments);
};

D.extend(DynamicView, D.View, {
    _afterRender: function() {
        var su = DynamicView.__super__._afterRender.call(this),
            me = this;

        me.regions = [];
        return me.chain(_.map(this.$$('[data-dynamic-key]'), function(item) {
            var key = item.getAttribute('data-dynamic-key'),
                moduleName, entity, region;

            entity = me._option('getEntity', key);
            moduleName = me._option('getEntityModuleName', key, entity);
            entity = me._option('dataForEntityModule', entity);

            region = new D.Region(me.app, me.module, item, key);
            me.regions.push(region);
            return region.show(moduleName, entity);
        }), function(items) {
            this._entities = items;
        }, su);
    },

    _beforeRender: function() {
        var su = DynamicView.__super__._beforeRender.call(this);
        return this.chain(this._closeRegions, su);
    },

    _beforeClose: function() {
        var su = DynamicView.__super__._beforeClose.call(this);
        return this.chain(this._closeRegions, su);
    },

    _closeRegions: function() {
        var result = this.chain(this.regions && this.regions.map(function(region) {
            return region.close();
        }));

        delete this.regions;
        return result;
    },

    getEntities: function() {
        return this._entities;
    }
});
/* eslint-enable no-underscore-dangle */

D.registerView('dynamic', DynamicView);

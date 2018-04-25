exports.items = {
    main: 'main'
};
exports.store = {
    models: {
        state: { data: {} }
    },
    callbacks: {
        init: function(option) {
            var state = this.models.state;
            state.data = option.url;
        }
    }
};

exports.beforeRender = function() {
    return this.dispatch('init', this.renderOptions);
};

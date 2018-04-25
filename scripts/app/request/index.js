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
        doGet: function() {
            var model = this.models.getM;
            var stateModel = this.models.state;
            // var params = {id:'aeax'};
            // model.set(params);
            return this.get(model).then(function(data) {
                console.log(data);
                model.changed();
                stateModel.data.push('数据');
                stateModel.changed();
            });
        },
        doPost: function() {
            var model = this.models.postM;
            var params = { objectID: '123456' };
            model.set(params);
            return this.post(model).then(function() {
                alert('操作成功');
            });
        },
        doDelete: function() {
            var model = this.models.deleteM;
            var params = { id: '123456' };
            model.set(params);
            return this.del(model).then(function() {
                // alert('操作成功');
            });
        },
        doPut: function() {
            var model = this.models.putM;
            var params = { objectID: '123456' };
            model.set(params);
            return this.put(model).then(function() {
                alert('操作成功');
            });
        }
    }
};

exports.beforeRender = function() {
};

exports.components = [function() {
    return {
        id: 'player',
        name: 'videojs',
        options: {
            video: {
                autoplay: true
            },
        }
    };
}];
exports.video = {
    ended: function() {
    },
    seeked: function(player) {
        player.play();
    },
    loadeddata: function() {
    }
};
exports.beforeClose = function() {
	// var player = this.components.player;
	// var resourceTotalTime = Math.floor(player.duration());
    // var lessonLocationTime = Math.floor(player.cache_.currentTime);
};
exports.afterClose = function() {
};

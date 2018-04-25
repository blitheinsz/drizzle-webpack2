require('../styles/blog.css');
require('../styles/todos.css');
require('./app/ext/view/dynamic-view');
require('./app/router');
require.context('./app/menu', true, /\.js$|\.hbs$/);
require.context('./app/todos', true, /\.js$|\.hbs$/);
require.context('./app/viewport', true, /\.js$|\.hbs$/);
require('./main');

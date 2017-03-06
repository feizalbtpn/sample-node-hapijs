/**
 * Created by feizal on 3/2/17.
 */

'use strict';

const Hapi = require('hapi');
const routes = require('./routes');
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.route(routes);

const options = {
    reporters: {
        myConsoleReporter: [{
            module: 'good-console'
        }, 'stdout']
    }
};

server.register({
    register: require('good'),
    options,
}, (err) => {
    if (err) {
        return console.error(err);
    }
    server.start(() => {
        console.info(`Server started at ${ server.info.uri }`);
    });

});

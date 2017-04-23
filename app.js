var static = require('node-static');


// var fileServer = new static.Server('./build');
var fileServer = new static.Server('./src');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(process.env.PORT || 3000);
'use strict';
exports.__esModule = true;
var crypto = require("crypto");
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req.url);
    var queryParams = {};
    req.url.substr(2).split('&').forEach(function (item) {
        var fields = item.split('=');
        queryParams[fields[0]] = fields[1];
    });
    var tempstr = [queryParams['timestamp'], queryParams['nonce'], 'easier'].sort().join('');
    var hash = crypto.createHash('sha1');
    var value = hash.update(tempstr).digest('hex');
    if (queryParams['signature'] === value) {
        res.end(queryParams['echostr']);
    }
    else {
        console.log(value, queryParams['signature']);
        res.end();
    }
});
server.listen(8888, '127.0.0.1', function () {
    console.log("listen on 127.0.0.1:8888");
});

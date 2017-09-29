'use strict';

import crypto = require('crypto');
import http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const queryParams = {};
    req.url.substr(2).split('&').forEach(item => {
        const fields = item.split('=');
        queryParams[fields[0]] = fields[1];
    });

    const tempstr = [queryParams['timestamp'], queryParams['nonce'], 'easier'].sort().join('');
    const hash = crypto.createHash('sha1');
    const value =  hash.update(tempstr).digest('hex');
    if (queryParams['signature'] === value) {
        res.end(queryParams['echostr']);
    } else {
        console.log(value, queryParams['signature']);
        res.end();
    }
});

server.listen(8888, '127.0.0.1', () => {
    console.log(`listen on 127.0.0.1:8888`);
});

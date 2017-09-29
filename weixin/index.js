'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const wechat_api_1 = require("./wechat-api");
let app = express();
let wechat = new wechat_api_1.WechatApi();
app.use("/wechat-api/", (req, res) => {
    wechat.request(req.url).then((data) => {
        res.send(data);
    }, (err) => {
        res.send(err.message);
    });
});
let server = app.listen(8889, "127.0.0.1", () => {
    console.info(`Listen on http://${server.address().address}:${server.address().port}`);
});
//# sourceMappingURL=index.js.map
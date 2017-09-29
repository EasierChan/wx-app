'use strict';

import * as express from "express";
import { WechatApi } from "./wechat-api";

let app = express();
let wechat = new WechatApi();

app.use("/wechat-api/", (req, res) => {
  wechat.request(req.url).then((data) => {
    res.send(data);
  }, (err: Error) => {
    res.send(err.message);
  });
});

let server = app.listen(8889, "127.0.0.1", () => {
  console.info(`Listen on http://${server.address().address}:${server.address().port}`)
});


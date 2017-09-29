'use stric';
import * as https from "https";

export class WechatApi {
  private readonly kWechatApiDomain = "https://api.weixin.qq.com/cgi-bin";
  private tokenMap: Object = {};
  private tokenTimer: any;

  constructor() {
    this.tokenTimer = setInterval(() => {
      for (let prop in this.tokenMap) {
        if (this.tokenMap[prop].expires_in < 1) {
          this.request(prop)
        }

        --this.tokenMap[prop].expires_in;
      }
    }, 1000);
  }

  request(uri: string): Promise<any> {
    return new Promise((resolve, reject) => {
      console.info(this.kWechatApiDomain + uri);
      if (uri.startsWith("/token")) {
        if (this.tokenMap.hasOwnProperty(uri) && this.tokenMap[uri].expires_in > 1) {
          resolve(JSON.stringify(this.tokenMap[uri]));
        } else {
          let request = https.get(this.kWechatApiDomain + uri, (res) => {
            console.log('statusCode:', res.statusCode);

            res.on('data', (d: string) => {
              this.tokenMap[uri] = JSON.parse(d);
              resolve(d);
            });

            res.on("error", (err: Error) => {
              reject(err.message);
            })
          });

          request.on("error", (err: Error) => {
            reject(err);
          });
        }
      } else {
        let request = https.get(this.kWechatApiDomain + uri, (res) => {
          console.log('statusCode:', res.statusCode);

          res.on('data', (d) => {
            resolve(d);
          });

          res.on("error", (err: Error) => {
            reject(err.message);
          })
        });

        request.on("error", (err: Error) => {
          reject(err);
        });
      }
    });
  }
}
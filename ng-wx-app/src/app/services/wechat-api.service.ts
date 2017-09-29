'use strict';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeChatAPIService {
  private readonly grant_type: string = 'client_credential';
  private app_id: string;
  private app_secret: string;
  private access_token: string;
  private expires_in: number;
  private request: any;
  private http_client: Http;

  init(http: Http, appid: string, appsecret: string) {
    this.http_client = http;
    this.app_id = appid;
    this.app_secret = appsecret;
  }

  get_access_token(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http_client
        .get(`/wechat-api/token?grant_type=${this.grant_type}&appid=${this.app_id}&secret=${this.app_secret}`)
        .subscribe(res => {
          const obj = res.json();
          if (obj.errcode) {
            reject(obj);
          } else {
            this.access_token = obj.access_token;
            this.expires_in = obj.expires_in;
            resolve();
          }
        },
        (error) => {
          reject(error);
        });
    });
  }

  createMenu(menu: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http_client
        .post(`/wechat-api/menu/create?access_token=${this.access_token}`, menu)
        .subscribe(res => {
          const obj = res.json();
          obj.errcode === 0 ? resolve(obj) : reject(obj);
        }, err => {
          reject(err);
        });
    });
  }
}


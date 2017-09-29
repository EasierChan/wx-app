'use strict';

import { Component } from '@angular/core';
import { WeChatAPIService } from './services/wechat-api.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private wechatApi: WeChatAPIService,
    private http: Http) {
    this.wechatApi.init(http, 'wx64ed827e55e35977', 'bbe3491a5f1ac55131134f00b030f07c');
  }
}

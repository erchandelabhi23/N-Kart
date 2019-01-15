import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubscriptionService {
  loginStatus: Subject<any> = new Subject<any>();
  constructor() { }

  //publishing the user status.
  publishLogin(status: String) {
    this.loginStatus.next(status);
  }

  //Send notification to the topnavbar about the user status by using Observable.
  captureLoginStatus() {
    return this.loginStatus.asObservable();
  }
}

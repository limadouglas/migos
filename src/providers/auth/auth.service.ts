import { Injectable } from '@angular/core';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from "angularfire2/auth";

import * as firebase from 'firebase/app';
import { BaseService } from '../base/base.service';

@Injectable()
export class AuthService extends BaseService {

  constructor(
    public afAuth: AngularFireAuth
  ) {
    super();
    console.log('Hello Auth Provider');
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth
        .authState
        .first()
        .subscribe((authUser: firebase.User) => {
          (authUser) ? resolve(true) : reject(false);
        });
    });
  }

}

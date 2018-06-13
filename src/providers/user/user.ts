import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { Http } from '@angular/http';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { User } from './../../models/user.model';
import * as firebase from 'firebase/app';


@Injectable()
export class UserProvider {

  currentUser: AngularFireObject<User>;
  userId: string;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth,) {
    this.listenAuthState();
  }

  private listenAuthState(): void {
    this.afAuth
      .authState
      .subscribe((authUser: firebase.User) => {
        if (authUser) {
          this.currentUser = this.db.object(`/usuarios/${authUser.uid}`);
          this.userId = (authUser.uid).toString(); 
        }
      });
  }


  getId(): string{
    return this.userId;
  }

  get(userId: string): AngularFireObject<User> {
    return this.db.object<User>(`/usuarios/${userId}`);
  }


  create(user: User, uuid: string): Promise<void> {
    return this.db.object(`/usuarios/${uuid}`).set(user);
  }

}

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { User } from './../../models/user.model';
import * as firebase from 'firebase/app';
<<<<<<< HEAD

@Injectable()
export class UserProvider {
=======
import { BaseService } from '../base/base.service';

@Injectable()
export class UserProvider extends BaseService{
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8

  currentUser: AngularFireObject<User>;
  userId: string;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
<<<<<<< HEAD
=======
    super();
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
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

  participar(idEvento: string): any{
<<<<<<< HEAD
    let part = {[this.getId()]: false};
    console.log(part);
    this.db.object(`/eventos/${idEvento}/participantes`).set(part);
=======
    let part = {[this.getId()]: true};
    this.db.object(`/eventos/${idEvento}/participantes`).update(part);
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
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

<<<<<<< HEAD


=======
  atualizar(nome: JSON): Promise<void> {
    return this.db.object(`/usuarios/${this.getId()}`).update(nome);
  }
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8

}

import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { BaseService } from '../base/base.service';
import { Chat } from '../../models/chat.model';

@Injectable()
export class ChatService extends BaseService {

  chats: AngularFireList<Chat>;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    super();
    this.setChats();
  }

  private setChats(): void {
    this.afAuth.authState
      .subscribe((authUser: firebase.User) => {
        if (authUser) {

          this.chats = this.db.list<Chat>(`/chats/${authUser.uid}`,
            (ref: firebase.database.Reference) => ref.orderByChild('timestamp')
          );

        }
      });
  }

  create(chat: Chat, userId1: string, userId2: string): Promise<void> {
    return this.db.object<Chat>(`/chats/${userId1}/${userId2}`)
      .set(chat)
      .catch(this.handlePromiseError);
  }

  getDeepChat(eventoId: string): AngularFireObject<Chat> {
    console.log(eventoId);
    return this.db.object<Chat>(`/eventos/${eventoId}`);
  }



}

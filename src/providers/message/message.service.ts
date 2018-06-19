import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import * as firebase from 'firebase/app';
import { BaseService } from '../base/base.service';
import { Message } from '../../models/message.model';

@Injectable()
export class MessageService extends BaseService {

  constructor(
    public db: AngularFireDatabase
  ) {
    super();
  }

  create(message: Message, listMessages: AngularFireList<Message>): Promise<void> {
    return Promise.resolve(listMessages.push(message));
  }

  getMessages(eventoId: string): AngularFireList<Message> {
    console.log(eventoId);

    return this.db.list(`/eventos/${eventoId}/chat`,
      (ref: firebase.database.Reference) => ref.limitToLast(30).orderByKey()
    );
  }

}

import { Component, ViewChild } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';

import { AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Chat } from './../../models/chat.model';
import { Message } from './../../models/message.model';
import { User } from './../../models/user.model';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { UserProvider } from './../../providers/user/user';
import { AuthService } from '../../providers/auth/auth.service';
import { MessageService } from '../../providers/message/message.service';
import { ChatService } from '../../providers/chat/chat.service';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  messages: AngularFireList<Message>;
  viewMessages: Observable<Message[]>;
  pageTitle: string;
  recipient: User;
  public eventoId: string;
  private chat1: AngularFireObject<Chat>;


  constructor(
    public authService: AuthService,
    public chatService: ChatService,
    public messageService: MessageService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserProvider
  ) {
  }


  ionViewDidLoad() {
    console.log(this.navParams);
    this.pageTitle = this.navParams.get('titulo');
    this.eventoId = this.navParams.get('idEvento');
   

    this.chat1 = this.chatService.getDeepChat(this.eventoId);

    this.messages = this.messageService
    .getMessages(this.eventoId);

    this.viewMessages = this.messageService.mapListKeys<Message>(this.messages);
    this.viewMessages
      .subscribe((messages: Message[]) => {
        this.scrollToBottom();
      });
    //let doSubscription = () => {

    //};



      /*

    this.userService
      .mapObjectKey<User>(this.userService.currentUser)
      .first()
      .subscribe((currentUser: User) => {
        this.sender = currentUser;



     
        this.messages
          .valueChanges()
          .first()
          .subscribe((messages: Message[]) => {

            if (messages.length === 0) {

              this.messages = this.messageService
                .getMessages(this.eventoId);

           //   doSubscription();

            } 

          });
         

      });
       */

  }

  sendMessage(newMessage: string): void {

    if (newMessage) {

      let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;

      this.messageService.create(
        new Message(
          this.eventoId,
          newMessage,
          currentTimestamp
        ),
        this.messages
      ).then(() => {

        console.log('msg enviada');

      });

    }

  }

  private scrollToBottom(duration?: number): void {
    setTimeout(() => {
      if (this.content._scroll) {
        this.content.scrollToBottom(duration || 300);
      }
    }, 50);
  }

}

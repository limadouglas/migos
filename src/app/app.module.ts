import { EventoPage } from './../pages/evento/evento';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroEventoPage } from '../pages/cadastro-evento/cadastro-evento';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UserProvider } from '../providers/user/user';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { InfoEventoPage } from '../pages/info-evento/info-evento';
<<<<<<< HEAD
import { EventoProvider } from '../providers/evento/evento';
import { UserMenuComponent } from '../components/user-menu/user-menu';
=======
import { EventoProvider }  from '../providers/evento/evento';
import { UserMenuComponent } from '../components/user-menu/user-menu';
import { ChatPage } from '../pages/chat/chat';


import { AuthService } from '../providers/auth/auth.service';
import { MessageService } from '../providers/message/message.service';
import { ChatService } from '../providers/chat/chat.service';
import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header.component';
import { MessageBoxComponent } from '../components/message-box/message-box.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { UserInfoComponent } from '../components/user-info/user-info.component';
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyCYMwMy5mJ0W-wIvzh1Vzt6g8XZq6PfdCw",
  authDomain: "migos-91bdd.firebaseapp.com",
  databaseURL: "https://migos-91bdd.firebaseio.com",
  storageBucket: "migos-91bdd.appspot.com",
  messagingSenderId: "248562844169"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
<<<<<<< HEAD
=======
    ChatPage,
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
    CadastroEventoPage,
    ConfiguracaoPage,
    InfoEventoPage,
    UserMenuComponent,
<<<<<<< HEAD
    EventoPage
=======
    EventoPage,
    CustomLoggedHeaderComponent,
    MessageBoxComponent,
    ProgressBarComponent,
    UserInfoComponent
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
<<<<<<< HEAD
=======
    ChatPage,
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
    CadastroEventoPage,
    ConfiguracaoPage,
    InfoEventoPage,
    EventoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
<<<<<<< HEAD
    EventoProvider
=======
    EventoProvider,
    ChatService,
    AuthService,
    MessageService
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
  ]
})
export class AppModule {}

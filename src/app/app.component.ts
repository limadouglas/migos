import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from './../pages/login/login';
import { HomePage } from './../pages/home/home';
import { EventoPage } from '../pages/evento/evento';
import { ConfiguracaoPage } from './../pages/configuracao/configuracao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


}


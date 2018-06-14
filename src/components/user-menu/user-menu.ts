import { HomePage } from './../../pages/home/home';
import { EventoPage } from './../../pages/evento/evento';
import { ConfiguracaoPage } from '../../pages/configuracao/configuracao';
import { LoginPage } from '../../pages/login/login';
import { BaseComponent } from "../base.component";

import { Component } from '@angular/core';
import { App, AlertController, MenuController, NavController } from 'ionic-angular';

@Component({
  selector: 'user-menu',
  templateUrl: 'user-menu.html'
})
export class UserMenuComponent extends BaseComponent {

  protected navCtrl: NavController;

  constructor(    
    public alertCtrl: AlertController,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, app, menuCtrl);
    console.log('Hello UserMenuComponent Component');
  }

  onInicio(){
    this.navCtrl.setRoot(HomePage)
  }

  onEvento(){
    this.navCtrl.setRoot(EventoPage)
  }

  onConfiguracao(){
    this.navCtrl.setRoot(ConfiguracaoPage)
  }

  onSair(){
    this.navCtrl.setRoot(LoginPage)
  }

}

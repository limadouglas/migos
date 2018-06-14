import { CadastroEventoPage } from './../cadastro-evento/cadastro-evento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

  novoEvento(){
    this.navCtrl.setRoot(CadastroEventoPage);   
  }

}

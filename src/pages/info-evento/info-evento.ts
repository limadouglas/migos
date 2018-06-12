import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }

  participar(){
    console.log('abrir chat');
  }
}

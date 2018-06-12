import { CadastroEventoPage } from './../cadastro-evento/cadastro-evento';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoEventoPage } from '../info-evento/info-evento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   infoEvento(){
    this.navCtrl.push(InfoEventoPage);
  }
   anteriorEvento(){
    console.log('anterior evento');
  }

   proximoEvento(){
    console.log('proximo evento');
  }

}

import { Evento } from './../../models/evento.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoEventoPage } from '../info-evento/info-evento';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  chats: Observable<Evento[]>;

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

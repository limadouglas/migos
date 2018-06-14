import { EventoProvider } from './../../providers/evento/evento';
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
  public indiceEvento: number;
  public titulo: string;
  public imagem: string;

  constructor(
    public navCtrl: NavController, 
    public eventoProvider: EventoProvider
  ) {
    this.indiceEvento = 0;
  }

   infoEvento(){

    console.log(this.eventoProvider.getEv());
    console.log('---------');

  }
   anteriorEvento(){
    console.log('anterior evento');
  }

   proximoEvento(){
    let evento = this.eventoProvider.getEventoId(this.indiceEvento++);
    this.titulo = evento.titulo;
    this.imagem = `https://firebasestorage.googleapis.com/v0/b/migos-91bdd.appspot.com/o/eventos%2F${evento.idEvento}?alt=media&token=3ef99712-fc6b-4fc3-89a9-f90d57fe58de`;
    console.log(evento.title);
    console.log(this.titulo);
  }

}

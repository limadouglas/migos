import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoEventoPage } from '../info-evento/info-evento';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public indiceEvento: number;
  public imagem: string = 'https://firebasestorage.googleapis.com/v0/b/migos-91bdd.appspot.com/o/eventos%2F1529018081358?alt=media';
  public evento = {titulo: 'titulo', idEvento: 'null'};

  constructor(
    public navCtrl: NavController, 
    public eventoProvider: EventoProvider
  ) {
    this.indiceEvento = 0;
    setTimeout(() => {
      this.proximoEvento();
<<<<<<< HEAD
    }, 700);
=======
    }, 800);
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
    
  }

   infoEvento(){
    this.navCtrl.push(InfoEventoPage, {evento: this.evento, imagem: this.imagem});
  }

   public anteriorEvento(){
    this.evento = this.eventoProvider.anteriorEvento();
    this.imagem = `https://firebasestorage.googleapis.com/v0/b/migos-91bdd.appspot.com/o/eventos%2F${this.evento.idEvento}?alt=media`;
  }

   public proximoEvento(){
    this.evento = this.eventoProvider.proximoEvento();
    this.imagem = `https://firebasestorage.googleapis.com/v0/b/migos-91bdd.appspot.com/o/eventos%2F${this.evento.idEvento}?alt=media`;
  }

}

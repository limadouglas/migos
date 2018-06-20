import { ChatPage } from './../chat/chat';
import { UserProvider } from './../../providers/user/user';
import { EventoProvider } from './../../providers/evento/evento';
import { CadastroEventoPage } from './../cadastro-evento/cadastro-evento';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {
  public eventos;
  public userId;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public eventoProvider: EventoProvider,
    public userProvider:UserProvider
  ) {
    setTimeout(() => {

      this.userId = this.userProvider.getId();
      console.log('page: eventos.ts constructor');
      console.log(this.userId);
      setTimeout(() => {
        this.eventos = this.eventoProvider.meusEventos(this.userId);
      }, 600);

    }, 500);
    
  }

  onEvento(item: any){

    this.navCtrl.push(ChatPage, {'titulo': item.titulo, 'idEvento': item.idEvento});
    console.log('abrirchat');
    console.log(item);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoPage');
  }

  novoEvento(){
    this.navCtrl.setRoot(CadastroEventoPage);   
  }

}

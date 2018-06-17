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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public eventoProvider: EventoProvider,
    public userProvider:UserProvider
  ) {
    
    setTimeout(() => {
      this.eventos = this.eventoProvider.meusEventos(this.userProvider.getId());
    }, 600);
    
  }

  onEvento(item: any){
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

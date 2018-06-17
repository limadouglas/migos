import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {
  public evento = {titulo: 'titulo', descricao: '', local: '', data: '', hora: '', qtde_participantes: '', idEvento: ''};
  public imagem: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {
    this.evento = navParams.get('evento');
    this.imagem = navParams.get('imagem');
    console.log(this.evento);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }

  participar(){
    this.userProvider.participar(this.evento.idEvento);
    console.log('abrir chat');
  }
}

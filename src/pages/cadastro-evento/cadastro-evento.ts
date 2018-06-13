import { Evento } from './../../models/evento.model';
import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserProvider } from './../../providers/user/user';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-cadastro-evento',
  templateUrl: 'cadastro-evento.html',
})
export class CadastroEventoPage {

  eventoForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public userProvider: UserProvider,
    public eventoProvider: EventoProvider
  ) {
    this.eventoForm = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(1)]],
      descricao: ['', [Validators.required, Validators.minLength(5)]],
      local: ['', [Validators.required, Validators.minLength(5)]],
      qtde_participantes: ['', [Validators.required, Validators.minLength(1)]],
      data: ['', [Validators.required, Validators.minLength(1)]],
      horario: ['', [Validators.required, Validators.minLength(1)]],
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroEventoPage');
  }

  cadastrar(): void {
    let formEvento = this.eventoForm.value;
   // let participantes : string[] = [this.userProvider.getId()];
    let evento = new Evento(formEvento.titulo, formEvento.descricao, formEvento.local, formEvento.qtde_participantes, formEvento.data, formEvento.horario, JSON.parse(`{"${this.userProvider.getId()}" : "true"}`));
    this.eventoProvider.create(evento)
      .then(() => {
        console.log('evento cadastrado!');
        this.navCtrl.setRoot(HomePage);
      }).catch((error: any) => {
        console.log(error);
        this.showAlert(error);
      });

  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

}

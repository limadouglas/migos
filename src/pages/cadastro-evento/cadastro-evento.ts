import { Component } from '@angular/core';
import { AlertController, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
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
    public loadingCtrl: LoadingController
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

   // let loading: Loading = this.showLoading();
    let formEvento = this.eventoForm.value;

    this.userProvider.createEvent(formEvento)
      .then(() => {
        console.log('evento cadastrado!');
        this.navCtrl.setRoot(HomePage);
   //     loading.dismiss();
        this.showAlert('Evento Cadastrado');
      }).catch((error: any) => {
        console.log(error);
   //     loading.dismiss();
        this.showAlert(error);
      });

  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'cadastrando...'
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

}

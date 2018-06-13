import { Evento } from './../../models/evento.model';
import { EventoProvider } from './../../providers/evento/evento';
import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserProvider } from './../../providers/user/user';
import { HomePage } from '../home/home';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-cadastro-evento',
  templateUrl: 'cadastro-evento.html',
})
export class CadastroEventoPage {

  eventoForm: FormGroup;
  private fileFoto: File;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public userProvider: UserProvider,
    public eventoProvider: EventoProvider,
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
    let loading: Loading = this.showLoading();
    let formEvento = this.eventoForm.value;
   // let participantes : string[] = [this.userProvider.getId()];
    let evento = new Evento(formEvento.titulo, formEvento.descricao, formEvento.local, formEvento.qtde_participantes, formEvento.data, formEvento.horario, JSON.parse(`{"${this.userProvider.getId()}" : "true"}`));
    this.eventoProvider.create(evento)
      .then((idEvento: number) => {

        let uploadTask = this.eventoProvider.uploadFoto(this.fileFoto, idEvento.toString());
        uploadTask.then((UploadTaskSnapshot: firebase.storage.UploadTaskSnapshot) => {
          loading.dismiss();
          console.log('evento cadastrado!');
          this.navCtrl.setRoot(HomePage);
        });
        
        /*
        uploadTask.on('state_changed', (snapshot: firebase.storage.UploadTaskSnapshot) => {
          //this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        }, (error: Error) => {
          // catch error
          loading.dismiss();
        }, () => {
          loading.dismiss();
          
        });
      */
      }).catch((error: any) => {
        loading.dismiss();
        console.log(error);
        this.showAlert(error);
      });

  }

  onFoto(event): void {
    this.fileFoto = event.target.files[0];
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Please wait...'
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

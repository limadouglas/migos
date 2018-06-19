<<<<<<< HEAD
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

=======
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, Loading, LoadingController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserProvider } from './../../providers/user/user';
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8

@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {
=======
  usuarioForm: FormGroup;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public userProvider: UserProvider,
    public loadingCtrl: LoadingController,
    public menuCtrl: MenuController
  ) {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]]
    });

>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
<<<<<<< HEAD
=======
    setTimeout(() => {
      this.menuCtrl.close();
    }, 600);
  }

  atualizar(): void {
    let loading: Loading = this.showLoading();
    let formUsuario = this.usuarioForm.value;

    let nome = (formUsuario.nome).trim() + ' ' + (formUsuario.sobrenome).trim();
    nome = this.capitalize(nome);
    this.userProvider.atualizar(JSON.parse(`{"nome" : "${nome}"}`))
      .then(() => {
        console.log('usuario atualizado!');
        loading.dismiss();
        this.showAlert('Atualizado com sucesso')
          .then((result)=>{ this.navCtrl.setRoot(HomePage) });
      }).catch((error: any) => {
        loading.dismiss();
        console.log(error);
        this.showAlert(error);
      });
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'atualizando...'
    });

    loading.present();
    return loading;
  }

  private showAlert(message: string): Promise<boolean> {
    return new Promise((resolve, reject) =>{
      this.alertCtrl.create({
        message: message,
        buttons: [{
            text: 'Ok',
            handler:_=> resolve(true)
        }]
      }).present();
    })
  }

  private capitalize(s: string): string{
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
  }

}

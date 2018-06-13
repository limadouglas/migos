import { CadastroEventoPage } from './../cadastro-evento/cadastro-evento';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { User } from './../../models/user.model';
import { UserProvider } from '../../providers/user/user';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  facebook = {
    loggedIn : false,
    name : '',
    email : '',
    profilePicture: ''
  }



  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private afauth: AngularFireAuth,
    public userProvider: UserProvider
  ) {}



  entrarFB() {
   // let loading: Loading = this.showLoading();
    this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((res) => {

        let user = new User(res.user.displayName, res.user.email, res.user.photoURL);
        this.facebook.loggedIn = true;
        this.facebook.email = res.user.email;
        this.facebook.name = res.user.displayName;
        this.facebook.profilePicture = res.user.photoURL;
        console.log('info: ', res.user);

        this.userProvider.create(user, res.user.uid)
          .then(()=>{
            console.log('logado com sucesso!!');
           // loading.dismiss();
            this.navCtrl.setRoot(CadastroEventoPage);
          }).catch((error: any) => {
            console.log(error);
         //   loading.dismiss();
            this.showAlert(':/ Problema ao logar, tente mais tarde.');
          });;
        })

   }

   sairFB() {
      this.facebook.loggedIn = false;
      this.afauth.auth.signOut();
   }


  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

}


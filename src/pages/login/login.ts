import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { User } from './../../models/user.model';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

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


<<<<<<< HEAD

=======
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
<<<<<<< HEAD
    private afauth: AngularFireAuth,
=======
    public afauth: AngularFireAuth,
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
    public userProvider: UserProvider,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }



<<<<<<< HEAD
  entrarFB() {
   // let loading: Loading = this.showLoading();
=======
  entrarFB = function() {
    
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
    this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((res) => {

        let user = new User(res.user.displayName, res.user.email, res.user.photoURL);
        this.facebook.loggedIn = true;
        this.facebook.email = res.user.email;
        this.facebook.name = res.user.displayName;
        this.facebook.profilePicture = res.user.photoURL;
        console.log('info: ', res.user);

        this.userProvider.create(user, res.user.uid)
          .then(() => {
            console.log('logado com sucesso!!');
           // loading.dismiss();
           this.menuCtrl.enable(true);
            this.navCtrl.setRoot(HomePage);
          }).catch((error: any) => {
            console.log(error);
         //   loading.dismiss();
            this.showAlert(':/ Problema ao logar, tente mais tarde.');
          });;
        })

   }

<<<<<<< HEAD
   sairFB() {
=======
   sairFB = function() {
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
      this.facebook.loggedIn = false;
      this.afauth.auth.signOut();
   }


<<<<<<< HEAD
  private showAlert(message: string): void {
=======
  public showAlert(message: string): void {
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

}


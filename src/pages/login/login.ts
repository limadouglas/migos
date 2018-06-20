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

  slideData = [{ image: "assets/img/slider2.jpg" },{ image: "assets/img/slider1.jpg" },{ image: "assets/img/slider3.jpg" }]

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
    public afauth: AngularFireAuth,
    public userProvider: UserProvider,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }



  entrarFB = function() {

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

   sairFB = function() {
      this.facebook.loggedIn = false;
      this.afauth.auth.signOut();
   }


  public showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }


}


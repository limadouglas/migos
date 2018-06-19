import { OnInit } from "@angular/core";
<<<<<<< HEAD

import { App, AlertController, MenuController, NavController } from 'ionic-angular';

//import { AuthService } from './../providers/auth.service';
import { LoginPage } from './../pages/login/login';
=======
import { App, AlertController, MenuController, NavController } from 'ionic-angular';
import { AuthService } from "../providers/auth/auth.service";

>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8

export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
<<<<<<< HEAD
        //public authService: AuthService,
=======
>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8
        public app: App,
        public menuCtrl: MenuController
    ) {}

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNavs()[0];
    }
<<<<<<< HEAD
    /*
    onLogout(): void {
        this.alertCtrl.create({
            message: 'Do you want to quit?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.authService.logout()
                            .then(() => {
                                this.navCtrl.setRoot(LoginPage);
                                this.menuCtrl.enable(false, 'user-menu');
                            });
                    }
                },
                {
                    text: 'No'
                }
            ]
        }).present();
    }
    */
=======

>>>>>>> a894633765b9a8b50022c345d578d549cbb0e2e8

}
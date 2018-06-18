import { OnInit } from "@angular/core";
import { App, AlertController, MenuController, NavController } from 'ionic-angular';
import { AuthService } from "../providers/auth/auth.service";


export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
        public app: App,
        public menuCtrl: MenuController
    ) {}

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNavs()[0];
    }


}
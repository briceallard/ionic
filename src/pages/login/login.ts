import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider,
      private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    try {
      await this.auth.login(this.email, this.password);
    } catch (e) {
      console.log(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}

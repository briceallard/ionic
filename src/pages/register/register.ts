import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider,
      private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register() {
    try {
      await this.auth.createUser(this.email, this.password);
    } catch (e) {
      console.log(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
  }

}

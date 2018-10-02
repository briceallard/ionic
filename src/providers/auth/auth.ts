import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  async createUser(email, password) {
    try {
      await this.auth.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login(email, password) {
    try {
      await this.auth.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}

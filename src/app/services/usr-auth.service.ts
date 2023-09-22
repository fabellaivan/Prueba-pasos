import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})

export class UsrAuthService {
  /** */
  constructor(private afauth: AngularFireAuth) { }

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log('error en login: ', err);
      return null;
    }
  }
  async register({ email, password }: any) {
      try {
        return await this.afauth.createUserWithEmailAndPassword(email, password);
        } catch (err) {
          console.log('error en login: ', err);
          return null;
        }
  }

  async logOut() {
    try {
      return await this.afauth.signOut();
    } catch (err) {
      console.log('error en login: ', err);
      return null;
    }
  }

  getUserLoggedIn() {
    return this.afauth.authState;
  }



  /** */
}

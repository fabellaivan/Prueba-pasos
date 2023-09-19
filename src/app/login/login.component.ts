import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,signOut
} from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  constructor(private router: Router, private auth: Auth) {}

  email= '';
  onSubmit() {
    const clickedButtonName = this.getClickedButtonName();

    const emailPass = document.forms[0];
    const { username, password } = emailPass;

    console.log(username.value, password.value);
    if (clickedButtonName === 'login') {
      this.login(username.value, password.value)
        .then(() => {
          this.email = username.value;
          this.login(username.value,password.value);
          this.router.navigate(['Home']);
        })
        .catch((error) => {
          console.error('Error de inicio de sesión:', error);
        });

    } else if (clickedButtonName === 'autoCompletar'){
        username.value = "ivan.fabella@hdi.com.ar";
        password.value = 'ivanmaxi1';
    }
  }


  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  private getClickedButtonName(): string {
    if (document.querySelector('button[name="login"]') === document.activeElement) {
      return 'login';
    } else if (document.querySelector('button[name="registro"]') === document.activeElement) {
      return 'registro';
    } else if( document.querySelector('button[name="Autocompletar"]') === document.activeElement) {
      return 'autoCompletar';
    }
    return 'default';
  }
}

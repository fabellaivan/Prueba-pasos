import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/services/user.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin: FormGroup;
  constructor(private userService: UserServiceService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  onSubmit() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      const formData = this.formLogin.value;
      const clickedButtonName = this.getClickedButtonName();
      if (clickedButtonName === 'login') {
        this.userService
          .login(formData)
          .then((response) => {
            console.log(response);
            this.router.navigate(['/Ejercicio']);
          })
          .catch((error) => {
            console.error('Error al registrar:', error);
          });
      } else {
        this.router.navigate(['/Registro']);
      }
    }
  }
  private getClickedButtonName(): string {
    const loginButton = document.querySelector('button[name="login"]');
    const registroButton = document.querySelector('button[name="registro"]');

    if (loginButton === document.activeElement) {
      return 'login';
    } else if (registroButton === document.activeElement) {
      return 'registro';
    }
    return 'default';
  }
}

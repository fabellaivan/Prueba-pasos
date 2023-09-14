import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  onSubmit() {
    const clickedButtonName = this.getClickedButtonName();
    if (clickedButtonName === 'login') {
      this.router.navigate(['/Ejercicio']);
    } else {
      this.router.navigate(['/Registro']);
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

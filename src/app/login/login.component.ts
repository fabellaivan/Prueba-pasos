import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/services/user.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({ // Cambia 'formReg' a 'formLogin'
      email: new FormControl(),
      password: new FormControl()
    });
  }
  onSubmit() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      const formData = this.formLogin.value;
      this.userService.login(formData).then(response => {
        console.log(response);
        this.router.navigate(['/Ejercicio']);
      }).catch((error) => {
        console.error('Error al registrar:', error);
      });
    }
  }
}

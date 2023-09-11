import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // Importa FormGroup y FormControl
import { UserServiceService } from 'src/services/user.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent {
  registrationForm: FormGroup;
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {
    this.registrationForm = new FormGroup({ // Cambia 'formReg' a 'registrationForm'
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      const formData = this.registrationForm.value;
      this.userService.register(formData).then(response => {
        console.log(response);
        this.router.navigate(['/Login']);
      }).catch((error) => {
        console.error('Error al registrar:', error);
      });
    }
  }
}


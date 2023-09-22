import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsrAuthService } from '../services/usr-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private router: Router,private usrService: UsrAuthService) {}

  logOn = false;
  public usr:any = {
    email: '',
    pass: ''

  };

  onSubmit() {
    const clickedButtonName = this.getClickedButtonName();

    if (clickedButtonName === 'login') {
      this.usrService.login(this.usr.email, this.usr.pass)
        .then(user => {
          this.router.navigate(['/Home'])
          if(!user) {
            alert("Datos incorrectos, si no tenes cuenta registrate!");
            return;
          };
        }).catch(err=>{
          console.log(err)
        })
    } else if (clickedButtonName === 'autoCompletar'){
       this.usr.email = "ivan.fabella@hdi.com.ar";
       this.usr.pass= 'ivanmaxi1';
    }
  }

  private getClickedButtonName(): string {
    if (document.querySelector('button[name="login"]') === document.activeElement) {
      return 'login';
    } else if( document.querySelector('button[name="Autocompletar"]') === document.activeElement) {
      return 'autoCompletar';
    }
    return 'default';
  }
  getUserLogeado(){
    console.log("llega");
    this.usrService.getUserLoggedIn().subscribe(res =>{
      console.log(res?.email,"llega");
    })
  }

}

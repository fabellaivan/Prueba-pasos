import { Component } from '@angular/core';
import { UsrAuthService } from '../services/usr-auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  protected usuario = '';


  constructor(private router: Router,private usrService: UsrAuthService) {
  }

  ngOnInit() {
    (this.getUserLogeado())
  }

  getUserLogeado() {
    this.usrService.getUserLoggedIn().subscribe((res) => {
      if (res?.email) {
        return (this.usuario = res.email);
      } else {
        return this.router.navigate(['/'])
      }
    });
  }
  async logOut(){
    this.usrService.logOut().then(() => {
      this.router.navigate(['/'])
    }).catch(err => {
      console.log(err);
    });

  }
}

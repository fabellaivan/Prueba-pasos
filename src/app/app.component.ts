
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'EjemploRutas';
  constructor(private router: Router){}

  navigate(){
    this.router.navigateByUrl("/primero");
    this.router.navigate([""]);
  }
}

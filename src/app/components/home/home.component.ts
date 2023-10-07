import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private router: Router){}
  onSubmit() {
    const clickedButtonName = "memo";
    if (clickedButtonName === 'memo') {
    console.log("llega");
    }
      //this.router.navigate(['/Memoria']);

  }
}

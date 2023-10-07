import { Component } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-memorytime',
  templateUrl: './memory-time.component.html',
  styleUrls: ['./memory-time.component.css']
})
export class MemoryTimeComponent {


  constructor(private carta: CartasService) {

  }

  ngOnInit(): void {
    this.carta.todos().subscribe(
      cartas=>{
        console.log(cartas);

      }
    )
  }


}

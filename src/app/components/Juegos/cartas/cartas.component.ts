import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit{
  deckId: string = '';
  cartas: any[] = [];
  misCartas:Observable<any>|undefined;

  constructor(private servCartas: CartasService) {

  }
  ngOnInit() {
    this.crearNuevoMazo();
    this.misCartas = this.servCartas.crearNuevoMazo();
  }

  crearNuevoMazo() {
    this.servCartas.crearNuevoMazo().subscribe(data => {
      this.deckId = data.deck_id;
    });
  }

  barajarMazo() {
    this.servCartas.barajarMazo(this.deckId).subscribe(data => {
      this.deckId = data.deck_id;
    });
  }

  extraerCarta() {
    this.servCartas.extraerCartas(this.deckId, 1).subscribe(data => {
      this.cartas = data.cards;
      this.barajarMazo();
      console.log(data.cards[0].value);
    });
  }


}

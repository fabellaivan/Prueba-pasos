import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {
  deckId: string = '';
  cartas: any[] = [];
  actual: number | undefined;
  aComparar: number | undefined;
  proximaCarta: any;
  resultado: string | undefined;

  constructor(private servCartas: CartasService) { }

  async ngOnInit() {
    await this.crearNuevoMazo();
    this.extraerCarta(); 
  }

  async crearNuevoMazo() {
    const data = await this.servCartas.crearNuevoMazo().toPromise();
    this.deckId = data.deck_id;
    this.barajarMazo();
  }

  async barajarMazo() {
    const data = await this.servCartas.barajarMazo(this.deckId).toPromise();
    this.deckId = data.deck_id;
  }

  async extraerCarta() {
    const data = await this.servCartas.extraerCartas(this.deckId, 1).toPromise();
    this.cartas = data.cards;
    this.aComparar = data.cards[0].value;
  }

  async comparar(opcion: string) {
    const data = await this.servCartas.extraerCartas(this.deckId, 1).toPromise();
    let proximaCarta = data.cards[0].value;
    if (this.aComparar != null) {
      if ((opcion === 'mayor' && proximaCarta > this.aComparar) || 
          (opcion === 'menor' && proximaCarta < this.aComparar) || 
          (opcion === 'igual' && proximaCarta === this.aComparar)) {
       // this.resultado = '¡Correcto! La carta es ' + opcion + '.'+ " Proxima->"+proximaCarta+ " A comparar->"+ this.aComparar;     
        Swal.fire({
          title:  this.resultado = '¡Correcto! La carta es ' + opcion + '.'+ " Proxima->"+proximaCarta+ " A comparar->"+ this.aComparar,
          showClass: {
            popup: 'Le erraste',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      
      } else {
        console.log(this.aComparar);
        this.resultado = 'Incorrecto. La carta es ' + (proximaCarta > this.aComparar ? 'mayor' : 'menor') + '.';        
      }
    }
    this.aComparar = proximaCarta; 
    this.cartas = data.cards;
  }
}
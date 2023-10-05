import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-time',
  templateUrl: './memory-time.component.html',
  styleUrls: ['./memory-time.component.css']
})
export class MemoryTimeComponent {

  numeroSecreto: number;
  intentos: number = 0;
  mensaje: string = '';
  numeroIngresado: number = 0;
  constructor() {
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
  }

  verificarNumero(numero: number): void {
    this.intentos++;

    if (numero === this.numeroSecreto) {
      this.mensaje = `¡Felicidades! Has adivinado el número en ${this.intentos} intentos.`;
    } else if (numero < this.numeroSecreto) {
      this.mensaje = 'El número secreto es mayor. Intenta nuevamente.';
    } else {
      this.mensaje = 'El número secreto es menor. Intenta nuevamente.';
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent {
  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;

  calcular() {
    this.promedio = (this.edadUno + this.edadDos) / 2;
    this.suma = this.edadUno + this.edadDos;
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}

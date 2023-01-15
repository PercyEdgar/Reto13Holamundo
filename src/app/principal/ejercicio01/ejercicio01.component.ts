import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.component.html',
  styleUrls: ['./ejercicio01.component.css']
})
export class Ejercicio01Component {
    valor : any;

    num1=0;
    op="ninguno";
    persona = {
      Apellido: 'Arcila',
      Casado: 'false',
      Direccion: 'Calle 35 # 43 28',
      nombre: 'Diego',
      telefono: 3859720,
      };
      
      persona2 = {
      Apellido: 'Bueno',
      Casado: 'false',
      Direccion: 'CR 16A # 53 28',
      nombre: 'Kevin',
      telefono: 31485579954,
      }
      
      persona3 = {
      Apellido: 'Palomino',
      Casado: 'false',
      Direccion: 'CR 25 # 52 33',
      nombre: 'Natalia',
      telefono: 32255945555,
      }
}

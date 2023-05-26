import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingreso:Ingreso[] = [];
  mensajeVacio: boolean = false;

  constructor(public ingresoServicio:IngresoServicio) { }

  ngOnInit(): void {
    this.ingreso = this.ingresoServicio.ingresos
    this.actualizarMensajeVacio()
  }

  eliminarIngreso(ingreso:Ingreso) {
    this.ingresoServicio.eliminar(ingreso)
    if(this.ingreso.length === 0) {
      this.ingresoServicio.actualizarMensajeVacio()
    }
  }

  private actualizarMensajeVacio() {
    this.mensajeVacio = this.ingreso.length === 0;
  }

}

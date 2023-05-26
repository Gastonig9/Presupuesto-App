import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egreso: Egreso[] = [];
  mensajeVacio: boolean = false;
  @Input() ingresoTotal: number;

  constructor(public servicioEgreso: EgresoServicio) { }

  ngOnInit(): void {
    this.egreso = this.servicioEgreso.egresos;
    this.actualizarMensajeVacio();
  }

  eliminarEgreso(egreso: Egreso) {
    this.servicioEgreso.eliminar(egreso);
    if (this.egreso.length === 0) {
      this.servicioEgreso.actualizarMensajeVacio();
    }
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }

  private actualizarMensajeVacio() {
    this.mensajeVacio = this.egreso.length === 0;
  }
}

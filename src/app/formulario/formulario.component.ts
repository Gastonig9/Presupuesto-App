import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.service';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  operacion: string = "ingresoOperacion";
  descripcionInput: string;
  valorInput: number;

  constructor(
    private ingresoServicio: IngresoServicio,
    private egresoServicio: EgresoServicio
  ) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento) {
    this.operacion = evento.target.value;
  }

  agregarValor() {
    if (this.operacion === "ingresoOperacion") {
      this.ingresoServicio.agregarIngreso(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.egresoServicio.agregarEgreso(new Egreso(this.descripcionInput, this.valorInput));
    }

    this.descripcionInput = " ";
    this.valorInput = null;
  }

}


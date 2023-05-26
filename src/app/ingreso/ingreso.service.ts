import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [];
  mensajeVacio: boolean = true;

  constructor() {
    this.cargarIngresos();
  }

  agregarIngreso(ingreso: Ingreso) {
    if(this.ingresos.length === 0) {
      this.mensajeVacio = false;
    }
    this.ingresos.push(ingreso);
    this.guardarIngresos();
  }

  private guardarIngresos() {
    localStorage.setItem('ingresos', JSON.stringify(this.ingresos));
  }

  private cargarIngresos() {
    const ingresosGuardados = localStorage.getItem('ingresos');
    if (ingresosGuardados) {
      this.ingresos = JSON.parse(ingresosGuardados);
    }
  }

  actualizarMensajeVacio() {
    this.mensajeVacio = this.ingresos.length === 0
  }

  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    if(indice !== -1) {
      this.ingresos.splice(indice, 1);
      this.guardarIngresos()
    }

  }
}

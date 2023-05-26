import { Egreso } from './egreso.model';

export class EgresoServicio {
  egresos: Egreso[] = [];
  mensajeVacio: boolean = true;

  constructor() {
    this.cargarEgresos();
  }

  agregarEgreso(egreso: Egreso) {
    if (this.egresos.length === 0) {
      this.mensajeVacio = false;
    }
    this.egresos.push(egreso);
    this.guardarEgresos();
  }

  private guardarEgresos() {
    localStorage.setItem('egresos', JSON.stringify(this.egresos));
  }

  private cargarEgresos() {
    const egresosGuardados = localStorage.getItem('egresos');
    if (egresosGuardados) {
      this.egresos = JSON.parse(egresosGuardados);
    }
    return egresosGuardados;
  }

  actualizarMensajeVacio() {
    this.mensajeVacio = this.egresos.length === 0;
  }

  eliminar(egreso: Egreso) {
    const indice = this.egresos.indexOf(egreso);
    if (indice !== -1) {
      this.egresos.splice(indice, 1);
      this.guardarEgresos();
    }
  }
}

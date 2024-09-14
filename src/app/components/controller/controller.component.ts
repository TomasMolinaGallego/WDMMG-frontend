import { Component, Input, OnInit } from '@angular/core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {
 

  date!: Date;
  isDateSelected : boolean = false;


  buttons = [
    { text: 'Crear movimiento', action: 'showSubmitMovimiento' },
    { text: 'Ver todos los movimientos', action: 'showMovimientos' },
    { text: 'Ver movimientos mes actual', action: 'showMovimientosUltimoMes' },
    { text: 'Ver movimientos por mes', action: 'showMovimientosMes' },
    { text: 'Ver estadísticas', action: 'showEstadisticas' }
  ];

  divStates: { [key: string]: boolean } = {
    showMovimientos : false,
    showSubmitMovimiento : true,
    showMovimientosUltimoMes :  false,
    showMovimientosMes :  false,
    showEstadisticas : false
  };

  constructor() { }

  toggleDiv(div: any) {
    for (let key in this.divStates) {
      this.divStates[key] = (key === div);
    }
  }


}


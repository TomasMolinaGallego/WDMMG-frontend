import { Component } from '@angular/core';

@Component({
  selector: 'app-show-movement-with-date-selector',
  templateUrl: './show-movement-with-date-selector.component.html',
  styleUrls: ['./show-movement-with-date-selector.component.css']
})
export class ShowMovementWithDateSelectorComponent {

  date!: Date;
  isDateSelected : boolean = false;
  showMonthPicker  : boolean = true;


  monthSelected(event: Date, dp: any, input: any) {
    dp.close();
    event.setMinutes(event.getTimezoneOffset()*-1);  // Stupid timezone
    this.date = event
    input.value = event.toISOString().split('-').join('/').substring(0, 7);
    this.isDateSelected = true
  }

  toggleMonthPicker() {
    this.showMonthPicker = !this.showMonthPicker;
  }

}

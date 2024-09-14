import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ControllerComponent } from './components/controller/controller.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { TableMovementsComponent } from './components/table-movements/table-movements.component';
import { SubmitMovementComponent } from './components/submit-movement/submit-movement.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowMovementComponent } from './components/show-movement/show-movement.component';
import { IgxCalendarModule,IgxCardModule} from "igniteui-angular";
import { ShowMovementWithDateSelectorComponent } from './components/show-movement-with-date-selector/show-movement-with-date-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent,
    TableMovementsComponent,
    SubmitMovementComponent,
    ShowMovementComponent,
    ShowMovementWithDateSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    IgxCalendarModule,
    IgxCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

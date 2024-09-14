import { Component, OnInit } from '@angular/core';
import { MovementModel } from '../../model/movement';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit-movement',
  templateUrl: './submit-movement.component.html',
  styleUrls: ['./submit-movement.component.css']
})
export class SubmitMovementComponent implements OnInit {

  movimiento!: MovementModel;
  mensaje!: String;
  isPositive!: boolean;
  isNegative! : boolean;
  selectedDate : Date = new Date()

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.movimiento = new MovementModel();
    this.movimiento.reason = "Ocio";
    this.movimiento.subreason = "";
    this.movimiento.quantity = 0;
    this.movimiento.necessary = false
    this.mensaje = ""
    this.isNegative = true;
    this.isPositive = false;
  }

  onSubmit(form:NgForm ) { 
    if(this.verificationFields().length != 0){
      this.mensaje =this.verificationFields()
    } else {
      this.movimiento.reason = this.movimiento.reason.toUpperCase()
      this.movimiento.dateMovement = this.selectedDate.toJSON()
      if(this.isNegative){
        this.movimiento.quantity = this.movimiento.quantity * -1;
      }
      this.http.post<any>('http://localhost:8080/api/v1/movement', this.movimiento).subscribe( value => {
      });
      this.movimiento = new MovementModel;
      this.movimiento.reason = "Ocio";
      this.movimiento.subreason = "";
      this.movimiento.quantity = 0;
      this.movimiento.necessary = false
      this.mensaje = "Movimiento enviado";
    }
  }

  onSelected(e: any){
    this.movimiento.reason = e.value
  }

  verificationFields():string{
    if(this.movimiento.subreason.length == 0){
      return "El campo \"Subconcepto\" no está relleno"
    }
    if(this.movimiento.quantity == 0){
      return "La cantidad no puede ser 0"
    }
    return ""
  }

  changeValueNegative(){
    if(this.isPositive == true){
      this.isNegative = true
      this.isPositive = false
    }
  }

  changeValuePositive(){
    if(this.isNegative == true){
      this.isNegative = false
      this.isPositive = true
    }

  }

}

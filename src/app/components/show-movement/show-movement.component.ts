import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovementModel } from 'src/app/model/movement';

@Component({
  selector: 'app-show-movement',
  templateUrl: './show-movement.component.html',
  styleUrls: ['./show-movement.component.css']
})
export class ShowMovementComponent implements OnInit, OnChanges {

  @Input()
  mode! : String;
  @Input()
  desiredDate : Date = new Date();
  movimientosRecibidos!: MovementModel[];
  dataSource!: MovementModel[];
  date : Date = new Date()

  
  constructor(private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges): void {
    var month  = this.desiredDate!.getMonth()+1
    this.getMovementsByMonth(month, this.desiredDate!.getFullYear())
  }

  ngOnInit(): void {
    if(this.mode == "all"){
      this.getMovementsAll()
    }
    if(this.mode == "actual"){
      var date = new Date()
      var month  = date.getMonth()+1 // Months start in 0 ???
      this.getMovementsByMonth(month, date.getFullYear())
    }
    if(this.mode = "date"){
      var month  = this.desiredDate!.getMonth()+1
      this.getMovementsByMonth(this.desiredDate!.getMonth(), this.desiredDate!.getFullYear())
    }
  }

  getMovementsByMonth(month : any, year : any){
    this.movimientosRecibidos = []
    this.dataSource = []
    this.http.get<any>('http://localhost:8080/api/v1/movement/'+ year + '/' + month).subscribe(
      value => 
        value.forEach((element: any) => {
          this.movimientosRecibidos.push(this.transformDTOToModel(element))
          this.dataSource = this.movimientosRecibidos
      }));
  }

  getMovementsAll(){
    this.movimientosRecibidos = []
    this.dataSource = []  
    this.http.get<any>('http://localhost:8080/api/v1/movement').subscribe(
      value => 
        value.forEach((element: any) => {
          this.movimientosRecibidos.push(this.transformDTOToModel(element))
          this.dataSource = this.movimientosRecibidos
      }));
  }

  
  transformDTOToModel(element: any){
    var mvt = new MovementModel;
    mvt.reason = element.reason.charAt(0) + element.reason.substring(1).toLowerCase();
    mvt.quantity = element.quantity;
    mvt.necessaryString = element.necessary ? "Sí" : "No";
    mvt.subreason = element.subreason;
    mvt.dateMovement = this.transformDateToLegibleDate(element.dateCreation);
    return mvt;
  }

  transformDateToLegibleDate(date: String){
    return date.substring(0, 10)
  }

}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovementModel } from '../../model/movement';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-movements',
  templateUrl: './table-movements.component.html',
  styleUrls: ['./table-movements.component.css']
})
export class TableMovementsComponent implements OnInit, OnChanges {


  @Input()
  dataSource!: MovementModel[];

  totalPositivo : number = 0
  totalNegativo : number = 0


  isStatCalculated : boolean = false;

  displayedColumns: string[] = ['reason', 'subreason', 'quantity', 'necessary', 'date'];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
      if(!this.isStatCalculated && this.dataSource.length != 0){
        this.dataSource.forEach(element => {
          if(element.quantity > 0){
            this.totalPositivo= this.totalPositivo + element.quantity
          } else {
            this.totalNegativo= this.totalNegativo + element.quantity

          }
        });
        this.isStatCalculated=true;
      }

  }

  

  






}

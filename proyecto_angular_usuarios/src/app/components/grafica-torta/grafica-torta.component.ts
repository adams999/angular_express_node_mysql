import { Component, Input, OnInit } from '@angular/core';
import { Test } from 'src/app/models/Test';


@Component({
  selector: 'app-grafica-torta',
  templateUrl: './grafica-torta.component.html',
  styleUrls: ['./grafica-torta.component.scss'],
})
export class GraficaTortaComponent implements OnInit {
  @Input() dataChart: any;
  constructor() {}

  ngOnInit(): void {
  }

  renderChart(){
    
  }
}

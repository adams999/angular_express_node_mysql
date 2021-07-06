import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.scss'],
})
export class GraficaBarrasComponent implements OnInit {
  @Input() dataChart: any;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Costsheet } from '../../model/costsheet';


@Component({
  selector: 'app-cost-card',
  templateUrl: './cost-card.component.html',
  styleUrls: ['./cost-card.component.css']
})
export class CostCardComponent implements OnInit, AfterViewInit {

  @Input() costsheet: Costsheet;

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('costsheet passed ==> ' + JSON.stringify(this.costsheet));
     }


}

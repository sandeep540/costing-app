import { Component, Input } from '@angular/core';
import { CostsheetApiService } from '../app/services/costsheet-api.service';
import { Costsheet } from 'src/app/model/costsheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'costing-app';

  filterCriteria: any;
  items: any;
  costsheets: Costsheet[];
  errormsg: any;
  // costsheet: Costsheet;

  getFilterCriteria($event) {
      // console.log('Raw event ' + $event);
      this.filterCriteria = $event;
      console.log('Event emitted' + JSON.stringify(this.filterCriteria));

      this.costService.getCostsheets(this.filterCriteria).subscribe(data => this.costsheets = data,
        error => this.errormsg = error);

      // console.log(this.costsheets);

  }

  constructor(private costService: CostsheetApiService) {

   }


}

import { Component, Input } from '@angular/core';
import { CostsheetApiService } from '../app/services/costsheet-api.service';
import { Costsheet } from 'src/app/model/costsheet';
import { LocalStorageService } from '../app/services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'costing-app';

  compare: Boolean = false;
  filterCriteria: any;
  items: any;
  costsheets: Costsheet[];
  errormsg: any;
  // costsheet: Costsheet;

  getFilterCriteria($event) {
      // console.log('Raw event ' + $event);
      this.filterCriteria = $event;
      console.log('Event emitted' + JSON.stringify(this.filterCriteria));
      // this.costsheets = [];

      this.costService.getCostsheets(this.filterCriteria).subscribe(data => {this.costsheets = data; if (this.costsheets.length > 0) {
        this.compare = true; }
      },
        error => this.errormsg = error);

      // console.log(this.costsheets);

  }

  constructor(private costService: CostsheetApiService, private localStorageService: LocalStorageService) {

   }


}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'costing-app';

  filterCriteria: any;

  getFilterCriteria($event) {
      // console.log('Raw event ' + $event);
      this.filterCriteria = $event;
      console.log('Event emitted' + JSON.stringify(this.filterCriteria));
  }

}

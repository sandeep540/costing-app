import { FilterForm } from './../model/filter-form';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Costsheet } from '../model/costsheet';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import * as costsheetJson from '../../assets/json/costsheet.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostsheetApiService {

  readonly _baseUrl: string = environment.baseUrl;
  readonly _CostsheetUrl = `${this._baseUrl}/costsheets`;
  

  getCostsheets(criteria: any) {

    console.log('In Costsheets Service');
    console.table('criteria is -->' + criteria);

    if (environment.production) {
      return this.http.post<Costsheet[]>(this._CostsheetUrl, criteria).pipe(
        catchError(this.errorHandler));
    } else {
      return of(<Array<Costsheet>>costsheetJson['default']);
    }

  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message || 'Server Error');
  }

  constructor(private http: HttpClient) { }
}

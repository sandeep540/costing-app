import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Brand } from '../model/brand';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import * as brandJson from '../../assets/json/brand.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandApiService {

  readonly _baseUrl: string = environment.baseUrl;
  readonly _BrandUrl = `${this._baseUrl}/brand`;

  getBrands() {

    console.log('In Service');

    if (environment.production) {
      return this.http.get<Brand[]>(this._BrandUrl).pipe(
        catchError(this.errorHandler));
    } else {
      return of(<Array<Brand>>brandJson['default']);
    }
  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message || 'Server Error');
  }

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Vendor } from '../model/vendor';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import * as vendorJson from '../../assets/json/vendor.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorApiService {

  readonly _baseUrl: string = environment.baseUrl;
  readonly _vendorUrl = `${this._baseUrl}/vendor`;

  getVendors() {

    if (environment.production) {
      return this.http.get<Vendor[]>(this._vendorUrl).pipe(
        catchError(this.errorHandler));
    } else {
      return of(<Array<Vendor>>vendorJson['default']);
    }
  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message || 'Server Error');
  }

  constructor(private http: HttpClient) { }
}

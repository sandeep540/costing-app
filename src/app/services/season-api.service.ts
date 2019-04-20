import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Season } from '../model/season';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import * as seasonJson from '../../assets/json/season.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeasonApiService {

  readonly _baseUrl: string = environment.baseUrl;
  readonly _seasonUrl = `${this._baseUrl}/seasons`;

  getSeasons() {

    if (environment.production) {
      return this.http.get<Season[]>(this._seasonUrl).pipe(
        catchError(this.errorHandler));
    } else {
      return of(<Array<Season>>seasonJson['default']);
    }

  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message || 'Server Error');
  }

  constructor(private http: HttpClient) { }
}

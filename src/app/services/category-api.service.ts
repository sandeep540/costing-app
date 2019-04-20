import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../model/category';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError as ObservableThrowError } from 'rxjs';
import * as categoryJson from '../../assets/json/category.json';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  readonly _baseUrl: string = environment.baseUrl;
  readonly _CategoryUrl = `${this._baseUrl}/category`;

  getCategorys() {

    console.log('In Category Service');

    if (environment.production) {
      return this.http.get<Category[]>(this._CategoryUrl).pipe(
        catchError(this.errorHandler));
    } else {
      return of(<Array<Category>>categoryJson['default']);
    }

  }

  errorHandler(error: HttpErrorResponse) {
    return ObservableThrowError(error.message || 'Server Error');
  }

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../shared/constants';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SalesDataService {
  constructor(private _http: HttpClient) {}

  getOrders(
    pageIndex: number,
    pageSize: number,
    filterTerm?: string,
    orderField?: string,
    directionSort?: string
  ) {
    let url = `${API_URL}/order/${pageIndex}/${pageSize}/`;
    console.log('filterTerm', filterTerm);
    if (filterTerm) {
      url += `${filterTerm}/`;
    }else{
      url += `undefined/`;

    }
    if (orderField && directionSort) {
      url += `${orderField}/${directionSort}`;
    }

    return this._http.get(url).pipe(catchError(this.handleError));
  }
  getOrdersByCustomer(n: number) {
    return this._http
      .get(`${API_URL}/order/bycustomer/${n}`)
      .pipe(catchError(this.handleError));
  }
  getOrdersByState() {
    return this._http
      .get(`${API_URL}/order/bystate`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<never> {
    let errorMessage = 'Error Unknown';
    if (error) {
      errorMessage = `Error: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

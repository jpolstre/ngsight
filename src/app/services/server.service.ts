import { SetServStatus } from './../shared/types';
import { API_URL } from './../shared/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServerService {

  constructor(private _http: HttpClient) {}

  getServers() {
    return this._http
      .get(`${API_URL}/server`)
      .pipe(catchError(this.handleError));
  }

  setServerStatus(bodyData: SetServStatus) {
    return this._http
      .put(`${API_URL}/server/${bodyData.id}`, bodyData)
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

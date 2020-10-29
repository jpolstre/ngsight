import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../shared/constants';
// import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  constructor(private _http: HttpClient) { }

  getOrders(pageIndex: number, pageSize: number) {
    return this._http.get(`${API_URL}/order/${pageIndex}/${pageSize}`);
    //.pipe(map(res => res.toString()));

  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Priceschema } from './priceschema';

const BASEURL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class PricelistService {
  constructor(private http: HttpClient) {}

  saveAllPrice(body): Observable<any> {
    return this.http.post(`{BASEURL}/pricelists`, body);
  }
  savePrice(body): Observable<any> {
    return this.http.post(`{BASEURL}/pricelists/create`, body);
  }

  getPriceById(listprice): Observable<any> {
    return this.http.get(`${BASEURL}/listprice/${listprice}`);
  }
  //Display all prices on display component
  GetallPrice() {
    return this.http.get(`${BASEURL}/pricelists`);
  }
}

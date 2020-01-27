import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://localhost:44306/api/';

  constructor(private http: HttpClient) { }

  getLoans() {
    return this.http.get<Loan[]>(this.url + 'loans');
  }

  getLoan(id: number) {
    return this.http.get<Loan>(this.url + 'loans/' + id);
  }

  addLoan(payload: Partial<Loan>) {
    return this.http.post<Loan>(this.url + 'loans', payload);
  }

  deleteLoan(id: number) {
    return this.http.delete<boolean>(this.url + 'loans/' + id);
  }

  // handleError(error: any) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiKey = 'A16K4JJ16OD3DAAA';
  private apiUrl = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) {}

  getNewsData(): Observable<any> {
    const url = `${this.apiUrl}?function=NEWS_SENTIMENT&apikey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}

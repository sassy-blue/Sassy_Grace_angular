import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '60d2f61d1ee948de91f7eecfac0298ce';
  private apiUrl = 'https://newsapi.org/v2/everything';

  constructor(private http: HttpClient) { }

  getNews(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?q=${query}&apiKey=${this.apiKey}`);
  }
}

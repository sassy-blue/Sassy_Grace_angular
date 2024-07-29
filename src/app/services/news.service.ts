import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'mfnjajlCcOh4JG7E720Sp-QhfDHUDKSfjvGb3YqhrQcey7sJ';
  private apiUrl = 'https://api.currentsapi.services/v1/latest-news';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?language=en&apiKey=${this.apiKey}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestoreApiService {

  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?limit=${limit}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {
  private apiUrl = 'http://localhost:8080/api/affaires';
  private userApiUrl = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) {}

  createAffaire(affaireData: any): Observable<any> {
    return this.http.post(this.apiUrl, affaireData);
  }
  getAffaires(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAvocats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.userApiUrl}/avocats`);
  }
}

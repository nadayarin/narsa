import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public setRoles(roles: any[]): void {  // Déclaration du type pour `roles` et le retour de la fonction
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): any[] {  // Déclaration du type de retour pour `getRoles`
    return JSON.parse(localStorage.getItem('roles')) || [];  // Assurer un tableau vide par défaut
  }
  public getUserRole(): string | null {
    const roles = this.getRoles();
    // Assuming roles is an array of roles and the first role is the user's role
    return roles.length > 0 ? roles[0] : null;
  }
  public setToken(jwtToken: string): void {  // Déclaration du type pour `jwtToken` et le retour de la fonction
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string | null {  // Déclaration du type de retour pour `getToken`
    return localStorage.getItem('jwtToken');
  }

  public clear(): void {  // Déclaration du type de retour pour `clear`
    localStorage.clear();
  }

  public isLoggedIn(): boolean {  // Déclaration du type de retour pour `isLoggedIn`
    return this.getRoles().length > 0 && this.getToken() !== null;
  }
  public fetchRolesFromBackend(): Observable<string[]> {
    const token = this.getToken();
    return this.http.get<string[]>(`${this.apiUrl}/roles`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
  }
}

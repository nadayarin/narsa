import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import {Observable} from "rxjs";  // Correction du chemin d'importation

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any): any {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  public forUser(): any {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }

  public forAdmin(): any {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles: string[]): boolean {
    const userRoles: any[] = this.userAuthService.getRoles();
    if (userRoles != null && userRoles) {
      for (const userRole of userRoles) {
        for (const allowedRole of allowedRoles) {
          if (userRole.roleName === allowedRole) {
            return true;
          }
        }
      }
    }
    return false;
  }
  resetPassword(oldPassword: string, newPassword: string): Observable<void> {
    return this.httpclient.post<void>(`${this.PATH_OF_API}/api/password/reset`, { oldPassword, newPassword });
  }
  getRoles(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.httpclient.get(`${this.PATH_OF_API}/roles`, { headers });
  }
  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // or sessionStorage, depending on where you store the token
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}

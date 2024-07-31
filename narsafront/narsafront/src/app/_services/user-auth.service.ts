import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: any[]): void {  // Déclaration du type pour `roles` et le retour de la fonction
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): any[] {  // Déclaration du type de retour pour `getRoles`
    return JSON.parse(localStorage.getItem('roles')) || [];  // Assurer un tableau vide par défaut
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
}

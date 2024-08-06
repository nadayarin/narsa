import {Component, OnInit} from '@angular/core';
import { UserAuthService } from './_services/user-auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'narsa';
  constructor(private userAuthService: UserAuthService, private router: Router) {}
  showCreateAffaireForm = false;
  showAddLawyerForm = false;
  showconsavocat = false;
  showalanyse = false;
  showconsaffaire = false;
  isAdmin: boolean = false;
  authorized: boolean = false;
  ngOnInit(): void {this.userAuthService.fetchRolesFromBackend().subscribe(
    roles => {
      this.userAuthService.setRoles(roles);
      this.isAdmin = roles.includes('Admin');
      this.authorized = this.isAdmin; // Set authorized based on isAdmin
    },
    error => {
      console.error('Erreur lors de la récupération des rôles:', error);
      this.isAdmin = false;
      this.authorized = false; // Ensure authorized is set to false on error
    }
  );}


  public isLoggedIn(): boolean {
    return this.userAuthService.isLoggedIn();
  }


  onCreateAffaire(): void {
    this.resetForms();
    this.showCreateAffaireForm = true;

  }

  onAddLawyer(): void {
    console.log('onAddLawyer triggered');
    this.resetForms();
    this.showAddLawyerForm = true;

  }
  onconsavocat(): void {
    this.resetForms();
    this.showconsavocat = true;

  }
  onanalyse(): void {
    this.resetForms();
    this.showalanyse = true;

  }
  onconsaffaire(): void {
    this.resetForms();
    this.showconsaffaire = true;

  }

  resetForms(): void {
    console.log('Resetting forms.');
    this.showCreateAffaireForm = false;
    this.showAddLawyerForm = false;
    this.showconsavocat = false;
    this.showalanyse = false;
    this.showconsaffaire = false;

    console.log('Forms reset.');
  }


}

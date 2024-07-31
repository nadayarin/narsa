import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() {}
  showCreateAffaireForm = false;
  showAddLawyerForm = false;
  showconsavocat = false;
  showalanyse = false;
  showconsaffaire = false;

  ngOnInit(): void {
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
    this.showCreateAffaireForm = false;
    this.showAddLawyerForm = false;
    this.showconsavocat = false;
    this.showalanyse = false;
    this.showconsaffaire = false;
  }
}

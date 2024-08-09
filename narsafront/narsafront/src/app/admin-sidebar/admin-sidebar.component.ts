// src/app/admin/admin-sidebar/admin-sidebar.component.ts
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('btn') closeBtn!: ElementRef;
  @ViewChild('searchBtn') searchBtn!: ElementRef;
  @Output() createAffaire = new EventEmitter<void>();
  @Output() addLawyer = new EventEmitter<void>();  @Output() consavocat = new EventEmitter<void>();
  @Output() analyse = new EventEmitter<void>();
  @Output()consulteraffaire = new EventEmitter<void>();
  @Output()resetpassword = new EventEmitter<void>();
  activeMenu: string | null = null;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ){ }

  ngOnInit(): void {
    this.addToggleLogic();
  }

  public toggleSubMenu(menuId: string): void {
    this.activeMenu = this.activeMenu === menuId ? null : menuId;
  }

  public logout(): void {
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

  addToggleLogic(): void {
    const sidebar = document.querySelector(".sidebar")!;
    const closeBtn = document.querySelector("#btn")!;
    const searchBtn = document.querySelector(".bx-search")!;

    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      this.menuBtnChange();
    });

    searchBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      this.menuBtnChange();
    });
  }

  menuBtnChange(): void {
    const sidebar = document.querySelector(".sidebar")!;
    const closeBtn = document.querySelector("#btn")!;
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }

  toggleCreateAffaireForm(): void {
    console.log('Create Affaire button clicked');
    this.createAffaire.emit();
  }

  toggleAddLawyerForm(): void {
    console.log('Add Lawyer button clicked');
    this.addLawyer.emit();
  }
  toggleConsAvocat():void {
    console.log('consultation button clicked');
    this.consavocat.emit();
  }
  toggleAnalyse():void {
    console.log('consultation button clicked');
    this.analyse.emit();
  }
  toggleConsulterAffaire():void {
    console.log('consultation button clicked');
    this.consulteraffaire.emit();
  }
  toggleresetpassword():void {
    console.log('consultation button clicked');
    this.resetpassword.emit();
  }


}
